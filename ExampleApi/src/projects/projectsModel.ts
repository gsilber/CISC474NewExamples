
export class ProjectsModel{
    id='';
    name='';
    description?='';
    groupid='';
    groupMembers:string[]=[];
    semester='';

    static fromObject(object:any):ProjectsModel{
        const p:ProjectsModel=new ProjectsModel();
        p.name=object.name;
        p.description=object.description;
        p.groupid=object.groupId;
        p.groupMembers=object.groupMembers;
        p.semester=object.semester
        return p;
    }
    toObject():any{
        return {name:this.name,description:this.description,groupid:this.groupid,groupMembers:this.groupMembers,semester:this.semester};
    }
}