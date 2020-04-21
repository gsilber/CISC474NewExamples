import express from 'express';
import {Config} from '../config';
import jwt from 'jsonwebtoken';
import { UserModel } from './userModel';
import { Database } from '../common/MongoDB';

export class SecurityController{
    db:Database=new Database(Config.url,"security");
    usersTable='users';

    public login(req:express.Request,res:express.Response,next:express.NextFunction){
        this.db.getOneRecord(this.usersTable,{email:req.body.email,password:req.body.password})
            .then((userRecord: UserModel)=>{
                if (!userRecord) res.sendStatus(401).end();
                const token=jwt.sign(userRecord.toObject(),Config.secret,{expiresIn:Config.tokenLife});
                res.send({fn:'login',status:'success',data: {token: token}}).end();
            }).catch(err=>res.sendStatus(401).end());
    }

    register(req:express.Request,res:express.Response,next:express.NextFunction){
        //body should contain email and password.  Can check password if we want.
        //password should be encrypted in db.  This method DOES NOT log the user in,
        //but simply returns success or failure.  Call login to authorize and get a token.
        const user:UserModel=new UserModel(req.body.email,req.body.password);
        this.db.addRecord(this.usersTable,user.toObject()).then((result:boolean)=>res.send({fn:'register',status:'success'}).end())
            .catch((reason)=>res.sendStatus(401).end());
        res.send();
    }
    authorize(req:express.Request,res:express.Response,next:express.NextFunction){
        res.send({fn:'authorize',status:'success'});
    }
    changePwd(req:express.Request,res:express.Response,next:express.NextFunction){
        res.send({fn:'changePwd',status:'success'});
    }

}