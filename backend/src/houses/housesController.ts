import express, { RequestHandler } from 'express';
import { HousesModel } from './housesModel';
import { Database } from '../common/MongoDB';
import { Config } from '../config';
//This is just an example of a second controller attached to the security module

export class HousesController {
    static db: Database = new Database(Config.url, "houses");
    static housesCollection = 'houses';

    getHouse(req: express.Request, res: express.Response){ //set so appends title, like api/houses/sometitlehere > see what req.send returns at this route
        const req_title = req.params.title;
        HousesController.db.getOneRecord(HousesController.housesCollection, {title : req_title})
            .then((results) => res.send({msg:"completed getonerecord", data: results}).end()) //message sent back, see result returned by getOneRecord (aka a data obj)
            .catch((reason) => res.status(500).send(reason).end()); //not sure
    }

    //request in form {"title":"someData"} 
    //note: MUST have req body as JSON in postmates to work!
    postHouse(req: express.Request, res: express.Response){
        const house : HousesModel = HousesModel.fromObject(req.body); //turns request into HouseModel object
        HousesController.db.addRecord(HousesController.housesCollection, house.toObject())  //turns HouseModel obj back into sendable data
            .then((results) => res.send(req.body.title).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
/*
    //getProject
    //sends the specific project as JSON with id=:id
    getProject(req: express.Request, res: express.Response) {
        const semester = req.params.semester;
        const id = Database.stringToId(req.params.id);
        ProjectsController.db.getOneRecord(ProjectsController.projectsTable, { _id: id, semester: semester })
            .then((results) => res.send({ fn: 'getProject', status: 'success', data: results }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
    //addProject
    //adds the project to the database
    addProject(req: express.Request, res: express.Response) {
        const proj: ProjectsModel = ProjectsModel.fromObject(req.body);

        ProjectsController.db.addRecord(ProjectsController.projectsTable, proj.toObject())
            .then((result: boolean) => res.send({ fn: 'addProject', status: 'success' }).end())
            .catch((reason) => res.status(500).send(reason).end());
    }
*/

}