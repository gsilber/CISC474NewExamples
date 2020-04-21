import { ApiRouter } from "./common/ApiRouter";
import { SecurityRouter } from "./security/securityrouter";

export class MainRouter extends ApiRouter{
    constructor(){super();}

    setupRoutes(): void {
        this.router.use('/security',new SecurityRouter().getRouter());
    }
    
}