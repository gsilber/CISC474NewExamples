import express, { RequestHandler } from 'express';
//This is just an example of a second controller attached to the security module

export class ProjectsController{
    //getProjects
    //sends a json object with all projects in the system that match :year
    getProjects(req:express.Request,res:express.Response){
        res.send({ fn: 'getProjects', status: 'success' }).end();
    }
    //getProject
    //sends the specific project as JSON with id=:id
    getProject(req:express.Request,res:express.Response){
        res.send({ fn: 'getProject', status: 'success' }).end();
    }
    //addProject
    //adds the project to the database
    addProject(req:express.Request,res:express.Response){
        res.send({ fn: 'addProjects', status: 'success' }).end();
    }
    //updateProject
    //updates the project in the database with id :id
    updateProject(req:express.Request,res:express.Response){
        res.send({ fn: 'updateProjects', status: 'success' }).end();
    }
    //deleteProject
    //deletes the project int he database with id :id
    deleteProject(req:express.Request,res:express.Response){
        res.send({ fn: 'deleteProjects', status: 'success' }).end();
    }

}