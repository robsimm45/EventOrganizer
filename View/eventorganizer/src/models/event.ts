import {user} from "./user"

export class event{
    id:number
    startDate:Date
    endDate:Date
    location:string
    organizer:user
    rsvp:user[]
    constructor(id:number = 0, startDate:Date, endDate:Date, location:string = '', organizer:user, rsvp:user[]){
        this.id = id || 0;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.organizer = organizer;
        this.rsvp = rsvp || [];
    }
}