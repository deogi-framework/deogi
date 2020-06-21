// import {UserRoutes} from "./users"
type Class = { new(...args: any[]): any; };
export interface Router {
    method:string
    route:string,
    controller: Class,
    action: string,
};

import { HelloController } from '../controllers/HelloController';

export const Routes:Array<Router> = [... 
    [{
        method: "get",
        route: "",
        controller: HelloController,
        action: "hello"
    },{
        method: "get",
        route: "/error",
        controller: HelloController,
        action: "doError"
    },{
        method: "post",
        route: "/add",
        controller: HelloController,
        action: "add"
    }],
]