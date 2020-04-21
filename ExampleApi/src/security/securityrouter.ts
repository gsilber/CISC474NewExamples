import { AppRouter } from "../common/AppRouter";
import { SecurityController } from "./securityController";

export class SecurityRouter extends AppRouter{
    
    constructor(){super();}

    setupRoutes(): void {
        const securityController: SecurityController=new SecurityController();
        this.expressRouter.get('/authorize',securityController.authorize)
        this.expressRouter.post('/login',securityController.login);
        this.expressRouter.post('/register',securityController.register);
        this.expressRouter.post('/changepwd',securityController.changePwd);
    }    
}