import { HelloController } from '../controllers/HelloController';
import { RouterGroup } from './contracts';
import { Request, Response, NextFunction } from 'express';

class RequestRouteGroup extends RouterGroup {
    
    defaultBefores = [
        (request: Request, response: Response, next: NextFunction) => {
            console.log('middleware on defaultBefore')
            next();
        }
    ];
    
    defaultAfters = [
        (request: Request, response: Response, next: NextFunction) => {
            console.log('middleware on defaultAfters')
            next();
        }
    ];

    groups = [
        {
            method: "get",
            route: "",
            controller: HelloController,
            action: "hello",
            afters:[(request: Request, response: Response, next: NextFunction) => {
                console.log('middleware on individual afters')
                next();
            }],
            befores:[(request: Request, response: Response, next: NextFunction) => {
                console.log('middleware on individual befores')
                next();
            }],
        },
        {
            method: "get",
            route: "/error",
            controller: HelloController,
            action: "doError"
        }
    ];
}

export default (new RequestRouteGroup).getRouterGroups();