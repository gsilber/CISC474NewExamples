export class UserModel{
    email = '';
    private _password='';
    set password(val:string){this._password=val;}
    get password():string{return this._password;}
    public constructor(email:string,password:string){
        this.email=email;
        this.password=password;
    }

    toObject=(): any=> ({email: this.email,password: this.password});
}