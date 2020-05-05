
export class HousesModel{
    id='';
    title='';
    description = '';


    //basically make new HouseModel and this.title = req.body.title?
    static fromObject(object:any):HousesModel{
        const h : HousesModel = new HousesModel();
        h.title = object.title;
        h.description = object.description;
        return h;
    }
    
    toObject():any{
        return {title: this.title, description: this.description};
    }
}