import { NextFunction, Request, Response } from 'express';
export interface Middelware {
    route?:string;
    handle(req:Request, res:Response, next:NextFunction):any;
}

let everyRequest:Middelware =  {
    handle:(req:Request, res:Response, next:NextFunction):any => {
        next()
    }
}

const Middlewares:Array<Middelware> = [
    everyRequest
]

export default Middlewares