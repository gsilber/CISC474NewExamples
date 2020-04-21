import express from 'express'
import { AppRouter } from './common/AppRouter';
import { SecurityRouter } from './security/securityrouter';

export class MainRouter extends AppRouter{
    constructor(){super();}

    setupRoutes(): void {
        this.addRouter('/security',new SecurityRouter());        
    }
    
}