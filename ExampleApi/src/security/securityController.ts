import express from 'express';

export class SecurityController{

    public login(req:express.Request,res:express.Response,next:express.NextFunction){
        res.send({fn:'login',status:'success'});
    }
    register(req:express.Request,res:express.Response,next:express.NextFunction){
        //body should contain email and password.  Can check password if we want.
        //password should be encrypted in db.  This method DOES NOT log the user in,
        //but simply returns success or failure.  Call login to authorize and get a token.
        res.send({fn:'register',status:'success'});
    }
    authorize(req:express.Request,res:express.Response,next:express.NextFunction){
        res.send({fn:'authorize',status:'success'});
    }
    changePwd(req:express.Request,res:express.Response,next:express.NextFunction){
        res.send({fn:'changePwd',status:'success'});
    }

}