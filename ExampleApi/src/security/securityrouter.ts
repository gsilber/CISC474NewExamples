import { AppRouter } from "../common/AppRouter";
import { SecurityController } from "./securityController";
import { SecurityMiddleware } from "./securityMiddleware";

export class SecurityRouter extends AppRouter{
    
    constructor(){super();}

    setupRoutes(): void {
        const securityController: SecurityController=new SecurityController();
        this.expressRouter.get('/authorize',[SecurityMiddleware.RequireAuth],securityController.authorize)
        this.expressRouter.post('/login',securityController.login);
        this.expressRouter.post('/register',securityController.register);
        this.expressRouter.post('/changepwd',[SecurityMiddleware.RequireAuth],securityController.changePwd);
    }    
}