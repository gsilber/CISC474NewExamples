import { AppRouter } from "../common/AppRouter";

export class SecurityRouter extends AppRouter{
    constructor(){super();}

    setupRoutes(): void {
        this.expressRouter.get('/test',(req,res,next)=>res.send({status:'ok'}));
    }
    
}