import { MongoClient, FilterQuery } from 'mongodb';

export class Database {

    constructor(private url: string, private dbName: string) { }

    addRecord(collection: string, object: any): Promise<boolean>{
        var dbname = this.dbName;
        var url=this.url;
        return new Promise(function(resolve,reject){
            MongoClient.connect(url, function (err, db) {
                if (err) reject(err);
                const dbo = db.db(dbname);
                dbo.collection(collection).insertOne(object,(err, result) => {
                    if (err) reject(err);
                    db.close();
                    resolve(true);
                });
            });
                
        });
    }

    updateRecord(collection: string, object: any): Promise<boolean>{
        var dbname = this.dbName;
        var url=this.url;
        return new Promise(function(resolve,reject){
            MongoClient.connect(url, function (err, db) {
                if (err) reject(err);
                const dbo = db.db(dbname);
                dbo.collection(collection).updateOne({email: object.email},{ $set: {password: object.password }},(err, result) => {
                    if (err) reject(err);
                    db.close();
                    resolve(true);
                });
            });
                
        });
    }

    getRecords(collection: string, query: FilterQuery<any> = {}): Promise<any> {
        var dbname = this.dbName;
        var url=this.url;
        return new Promise(function (resolve, reject) {            
            MongoClient.connect(url, function (err, db) {
                if (err) reject(err);
                const dbo = db.db(dbname);
                dbo.collection(collection).find(query).toArray((err, result) => {
                    if (err) reject(err);
                    db.close();
                    resolve(result);
                });
            });
        });
    }

    getOneRecord(collection: string, query: FilterQuery<any> = {}): Promise<any> {
        var dbname = this.dbName;
        var url=this.url;
        return new Promise(function (resolve, reject) {            
            MongoClient.connect(url, function (err, db) {
                if (err) reject(err);
                const dbo = db.db(dbname);
                dbo.collection(collection).findOne(query, (err, result) => {
                    if (err) reject(err);
                    db.close();
                    resolve(result);
                });
            });
        });
    }

}