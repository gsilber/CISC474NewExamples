import { AppRouter } from "./common/AppRouter";
import { SecurityRouter } from "./security/securityrouter";

export class MainRouter extends AppRouter{
    constructor(){super();}

    setupRoutes(): void {
        this.router.use('/security',new SecurityRouter().getRouter());
    }
    
}