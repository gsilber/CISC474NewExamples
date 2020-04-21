import express from 'express';
import { Config } from '../config';
import jwt from 'jsonwebtoken';
import { UserModel } from './userModel';
import { Database } from '../common/MongoDB';

export class SecurityController {
    static db: Database = new Database(Config.url, "security");
    static usersTable = 'users';

    public login(req: express.Request, res: express.Response, next: express.NextFunction) {
        SecurityController.db.getOneRecord(SecurityController.usersTable, { email: req.body.email })
            .then((userRecord: any) => {
                if (!userRecord) return res.sendStatus(401).end();
                const usr: UserModel = UserModel.fromObject(userRecord);
                if (!usr.validatePassword(req.body.password)) return res.sendStatus(401).end();
                const token = jwt.sign(usr.toObject(), Config.secret, { expiresIn: Config.tokenLife });
                res.send({ fn: 'login', status: 'success', data: { token: token } }).end();
            }).catch(err => res.sendStatus(401).end());
    }

    register(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user: UserModel = new UserModel(req.body.email, req.body.password);
        SecurityController.db.getOneRecord(SecurityController.usersTable, { email: req.body.email })
            .then((userRecord: any) => {
                if (userRecord) return res.status(400).send({ fn: 'register', status: 'failure', data: 'User Exits' }).end();
                SecurityController.db.addRecord(SecurityController.usersTable, user.toObject()).then((result: boolean) => res.send({ fn: 'register', status: 'success' }).end())
                    .catch((reason) => res.sendStatus(500).end());
                res.send({ fn: 'register', status: 'success' }).end();
            }).catch((reason) => res.sendStatus(500).end());
    }
    authorize(req: express.Request, res: express.Response, next: express.NextFunction) {
        //validate that req.authUser exists, if so, return the user's email address.
        console.log();
        res.send({ fn: 'authorize', status: 'success', data:{email: req.body.authUser.email} }).end();
    }
    changePwd(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!req.body.password) res.status(400).send({ fn: 'changePwd', status: 'failure' }).end();
        const user: UserModel = new UserModel(req.body.authUser.email, req.body.password);
        SecurityController.db.updateRecord(SecurityController.usersTable, user.toObject()).then((result:Boolean)=>{
            if (result)
                res.send({ fn: 'changePwd', status: 'success' }).end();
            else 
                res.status(400).send({ fn: 'changePwd', status: 'failure' }).end();
        }).catch(err=>res.send({ fn: 'changePwd', status: 'failure', data:err }).end());
    }

}