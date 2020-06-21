import { NextFunction, Request, Response } from 'express';

export interface ErrorHandler {
    handle(err:Error,req:Request, res:Response, next:NextFunction):any;
}

export class DefaultError extends Error {
    status: number;
    message: string;
    constructor(message: string,status: number = 500 ) {
      super(message);
      this.status = status;
      this.message = message;
    }
}

export class NotFountError extends DefaultError {
    status: number;
    message: string;
    constructor(message: string,status: number = 404 ) {
      super(message);
      this.status = status;
      this.message = message;
    }
}

let errorHandler:ErrorHandler = {
    handle:(err:Error,req:Request, res:Response, next:NextFunction):any => {
        let status = 500
        if(err instanceof DefaultError)
            status = err.status || 500;
        const message = err.message || 'Unknown Error';
        res
        .status(status)
        .send({
            status,
            message,
        })
    }
}

const ErrorHandlers:Array<ErrorHandler> = [
     errorHandler
]

export default ErrorHandlers