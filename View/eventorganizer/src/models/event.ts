import {user} from "./user"

export class event{
    id:number
    name:string
    startDate:Date
    endDate:Date
    location:string
    organizer:user
    rsvp:user[]
    constructor(id:number = 0, name:string, startDate:Date, endDate:Date, location:string = '', organizer:user, rsvp:user[]){
        this.id = id || 0;
        this.name = name || '';
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organizer = organizer;
        this.rsvp = rsvp || [];
    }
}