import { combineReducers } from "redux";
import { event } from "../models/event";
import { user } from "../models/user";
import { eventsReducer } from "./events.reducer";
import { userReducer } from "./user.reducer";


//make the other models then reducers

export interface IcurrentUserState{
    self:user
    allUsers:user[]
}

export interface IeventState{
    allEvents:event[]
    selectedEvent:event
}

export interface IState{
    currentUser:IcurrentUserState
    events:IeventState
}


export const state = combineReducers<IState>({
    currentUser: userReducer,
    events: eventsReducer
})