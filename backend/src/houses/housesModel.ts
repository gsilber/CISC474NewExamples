
export class HousesModel{
    id='';
    title='';


    //basically make new HouseModel and this.title = req.body.title?
    static fromObject(object:any):HousesModel{
        const ahouse : HousesModel = new HousesModel();
        ahouse.title = object.title;
        return ahouse;
    }
    
    toObject():any{
        return {title: this.title};
    }
}