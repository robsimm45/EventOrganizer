export class user{
    id:number
    firstName:string
    lastName:string
    email:string
    constructor(id:number, firstName:string, lastName:string, email:string){
        this.id = id || 0;
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.email = email || '';
    }
}