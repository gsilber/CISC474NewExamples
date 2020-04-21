import express from 'express'
import { AppRouter } from './common/AppRouter';
import { SecurityRouter } from './security/securityrouter';
import { ProjectsRouter } from './projects/projectsRouter';

export class MainRouter extends AppRouter{
    constructor(){super();}

    setupRoutes(): void {
        this.addRouter('/security',new SecurityRouter());        
        this.addRouter('/projects',new ProjectsRouter());
    }
    
}