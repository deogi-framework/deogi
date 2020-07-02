import * as express from 'express';
import * as bodyParser from "body-parser";
import Middlewares, { Middelware } from "./middlewares"
import {Routes} from "./routes";
import ErrorHandlers from "../app/errors";
import {connect as connectDB, close as closeDB } from "../infra/db-connections"
import { NextFunction } from 'express';
import dotenv from 'dotenv'
import Container from 'typedi';

export class Bootloader {

    protected static _instance: Bootloader;
    
    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }
    
    async loadConnections() {
        await connectDB();
    }
    
    public app : express.Application;
    
    protected constructor(){
        dotenv.config()
        this.app = express.default();
    }

    loadMiddleware(){

        this.app.use(bodyParser.json());
        
        Middlewares.forEach((middleware:Middelware)=> {
            if(middleware.route)
                this.app.use(middleware.route,middleware.handle)
            else
                this.app.use(middleware.handle)
        });
    }

    loadRoutes(){
        Routes.forEach(route => {
            const handle = (req: express.Request, res: express.Response, next: NextFunction) => {
                const result = Container.get(route.controller)[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => {
                        if(result instanceof Error)
                            next(result)
                        else if(result !== null && result !== undefined)
                            res.send(result)
                            next();
                    }).catch(err => {
                        next(err)
                    })
                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            };
            
            const app = (this.app as any);
            const rr = route.route;
            
            if(route.befores && route.befores.length > 0) app.use(rr, route.befores);    
            app[route.method](rr, handle)
            if(route.afters && route.afters.length > 0) app.use(rr, route.afters);
                
        });
    }

    loadErrorHandler(){
        ErrorHandlers.forEach(handler => {
            this.app.use(handler.handle)
        });
    }

    async bootstrap(){
        await this.loadConnections();
        this.loadMiddleware();
        this.loadRoutes();
        this.loadErrorHandler();
    }

    async down(){
        await closeDB();
    }
}

export default Bootloader.Instance;