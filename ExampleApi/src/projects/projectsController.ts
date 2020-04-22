import express, { RequestHandler } from 'express';
import { ProjectsModel } from './projectsModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';
//This is just an example of a second controller attached to the security module

export class ProjectsController{
    static db: Database = new Database(Config.url, "projects");
    static projectsTable = 'projects';

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
        const proj:ProjectsModel= req.body;
        ProjectsController.db.addRecord(ProjectsController.projectsTable, proj).then((result: boolean) => res.send({ fn: 'addProject', status: 'success' }).end())
            .catch((reason) => res.sendStatus(500).end());
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