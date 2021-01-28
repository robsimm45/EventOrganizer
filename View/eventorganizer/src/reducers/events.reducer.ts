import { IeventState } from ".";
import { eventTypes } from "../actions/events.action";

const initialState: IeventState = {
    allEvents: [],
    selectedEvent : {
        id: 0,
        startDate: null,
        endDate: null,
        location: '',
        organizer: null,
        rsvp: []
    }
}

export const eventsReducer = (state = initialState, action) =>{
    switch(action.type){
        case eventTypes.foundAll :
            return {
                ...state,
                allEvents: action.payload
            }
        case eventTypes.selectedEvent :
            return {
                ...state,
                selectedEvent: action.payload
            }
        case eventTypes.createdEvent :
            return {
                ...state,
                allEvents: action.payload
            }
        case eventTypes.updatedEvent :
            return {
                ...state,
                allEvents: action.payload
            }
        case eventTypes.editedEvent :
            return {
                ...state,
                selectedEvent: action.payload
            }
        case eventTypes.deletedEvent :
            return {
                ...state,
                allEvents: action.payload
            }
        default:
            return state
    }
}