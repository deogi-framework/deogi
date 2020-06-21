import {NextFunction, Request, Response} from "express";
import { DefaultError } from '../../app/errors/index'
import Adder from '../../app/services/Adder';

export class HelloController {
    
    async hello(request: Request, response: Response, next: NextFunction) {
        let name = request.query.name??'you'

        response.send({
            "message":`hello ${name}.`
        });
    }

    async doError(request: Request, response: Response, next: NextFunction) {
        return new DefaultError("Hello Error",511);
    }
    
    async add(request: Request, response: Response, next: NextFunction) {
        let a = Number(request.query.a??0);
        let b = Number(request.query.b??0);
        response.send({answer : new Adder().add(a,b)});
    }

}