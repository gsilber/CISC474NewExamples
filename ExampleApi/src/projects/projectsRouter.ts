import { AppRouter } from "../common/AppRouter";
import { SecurityMiddleware } from "../security/securityMiddleware";
import { ProjectsController } from "./projectsController";

export class ProjectsRouter extends AppRouter{
    static projController: ProjectsController=new ProjectsController();
    constructor(){super();}

    setupRoutes(): void {        
        this.expressRouter.get('/test',[SecurityMiddleware.RequireAuth],ProjectsRouter.projController.test)
    }    
}