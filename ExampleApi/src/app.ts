import express from 'express'

class Application {
    app: express.Application;
    
    constructor(private port: number) {
        this.app = express();
    }

    startServer() {
        
        this.app.listen(this.port, ()=>console.log('ExampleApi Listening on port '+this.port.toString()));
    }
}

new Application(3000).startServer();
