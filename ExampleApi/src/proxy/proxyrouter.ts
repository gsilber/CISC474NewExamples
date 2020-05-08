import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { ProxyController } from "./proxyController";

//This is just an example second router to show how additional routers can be added
export class ProxyRouter extends AppRouter{
    static proxController: ProxyController=new ProxyController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {      
        this.expressRouter.get('/:searchString',ProxyRouter.proxController.getFromOtherApi);
    }    
}