import express, { RequestHandler } from 'express';
//This is just an example of a second controller attached to the security module

export class ProjectsController{
    //Represents the /test endpoint in this module
    test(req:express.Request,res:express.Response){
        res.send({ fn: 'test', status: 'success' }).end();
    }
}