import express from 'express'
import { MainRouter } from './mainRouter';
import { NodeApplication } from './common/NodeApplication';
import { AppRouter } from './common/AppRouter';

class Application extends NodeApplication {

    constructor(port: number) {
        super(port,'/api');
    }
    
    OnSetupComplete(port: number): void {
        console.log('ExampleApi Listening on port ' + port.toString());
    }

    SetupRoutes(): AppRouter {
        return new MainRouter();
    }
}
const port = process.env.PORT || 3000;
new Application(+port).startServer();
