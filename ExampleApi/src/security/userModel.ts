import bcrypt from 'bcrypt';

export class UserModel{
    id?='';
    email = '';
    private _password='';

    set password(val:string){
        this._password=UserModel.encryptString(val);
    }
    //returns encrypted password
    get password():string{return this._password;}

    //encrypts password
    public constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }

    //does not encrypt password, expects already encrypted password
    static fromObject=(obj:any):UserModel=>{
        const mdl=new UserModel(obj.email,'');
        mdl._password=obj.password;
        return mdl;
    }

    //includes encrypted password
    toObject=(): any=> ({email: this.email,password: this.password});

    //compares unencrypted password to encrypted password
    validatePassword(password:string):boolean{
        if (this.password==='*') {return false;}
        return bcrypt.compareSync(password,this.password);
    }
    static encryptString(inval:string):string{
        try {
            var salt  = bcrypt.genSaltSync(10);
            return bcrypt.hashSync(inval, salt);
        }catch (err){
            return '*';
        }
    }
}