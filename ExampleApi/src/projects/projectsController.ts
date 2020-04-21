import express, { RequestHandler } from 'express';

export class ProjectsController{
    test(req:express.Request,res:express.Response){
        res.send({ fn: 'test', status: 'success' }).end();
    }
}