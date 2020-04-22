import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { ProjectsController } from "./projectsController";

//This is just an example second router to show how additional routers can be added
export class ProjectsRouter extends AppRouter{
    static projController: ProjectsController=new ProjectsController();
    constructor(){super();}

    //sets up the routes within this module shows an example of a route that requires authorization, and one that does not
    setupRoutes(): void {        
        //requires auth
        this.expressRouter.get('/test',[SecurityMiddleware.RequireAuth],ProjectsRouter.projController.test)
        //does not require auth
        this.expressRouter.get('/test2',ProjectsRouter.projController.test)
    }    
}