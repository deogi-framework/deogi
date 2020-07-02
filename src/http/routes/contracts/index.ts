import { RequestHandlerParams } from 'express-serve-static-core'
type Class = { new(...args: any[]): any; };

export interface Router {
    method:string
    route:string,
    controller: Class,
    action: string,
    befores?: RequestHandlerParams[],
    afters?: RequestHandlerParams[],
};

export class RouterGroup {
    
    defaultBefores:RequestHandlerParams[] = [];
    defaultAfters:RequestHandlerParams[] = [];

    groups:Router[];

    getRouterGroups(): Router[] {
        return this.groups.map<Router>( (router):Router => {
                        
            if(!router.afters)
                router.afters = [];
            router.afters = [... this.defaultAfters, ... router.afters]
            
            if(!router.befores)
                router.befores = [];
            router.befores = [... this.defaultBefores, ... router.befores]

            return router;
        });
    }
}