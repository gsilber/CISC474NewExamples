import express, { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { Config } from '../config';

export class SecurityMiddleware {

    static get RequireAuth(): RequestHandler {
        return (req: express.Request, res: express.Response, next: express.NextFunction) => {
            let token = req.headers["x-access-token"] || req.headers["authorization"];
            //if no token found, return response (without going to the next middelware)
            if (!token) return res.status(401).send("Access denied. No token provided.");

            if (token.includes('bearer')) token=token.toString().substr(6).trimLeft();
            try {
                //if can verify the token, set req.user and pass to next middleware
                const decoded = jwt.verify(token.toString(), Config.secret);
                req.body.authUser = decoded;
                next();
            } catch (ex) {
                //if invalid token
                res.status(400).send("Invalid token.");
            }
        }
    }
}