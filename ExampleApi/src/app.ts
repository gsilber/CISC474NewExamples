import express from 'express'
import { MainRouter } from './mainRouter';

class Application {
    app: express.Application;
    
    constructor(private port: number) {
        this.app = express();
    }

    startServer() {
        //configure body parser
        //configure CORS
        this.app.use('/api',new MainRouter().getRouter());
        this.app.listen(this.port, ()=>console.log('ExampleApi Listening on port '+this.port.toString()));
    }
}
const port=process.env.PORT || 3000;
new Application(+port).startServer();
