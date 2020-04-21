import express from 'express';

export abstract class AppRouter{
    protected router: express.Router;
    constructor(){
        this.router=express.Router();    
        this.setupRoutes();       
    }
    abstract setupRoutes(): void;

    getRouter(): express.Router{
        return this.router;
    }
}