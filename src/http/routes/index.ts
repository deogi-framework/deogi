// import {UserRoutes} from "./users"
import { Router } from './contracts'

import { HelloController } from '../controllers/HelloController';
import defaultRouterGroup from './default';

export const Routes:Array<Router> = [... 
    [{
        method: "post",
        route: "/add",
        controller: HelloController,
        action: "add"
    },
    ... defaultRouterGroup],
]