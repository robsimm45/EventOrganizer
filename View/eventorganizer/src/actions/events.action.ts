import { eventClient } from "../axios/event-client"

export const eventType = {
    foundAll: 'ALL_EVENTS_FOUND',
    selectEvent: 'EVENT_SELECTED',
    createEvent: 'EVENT_CREATED',
    editEvent: 'EVENT_CHANGED',
    updateEvent: 'EVENT_UPDATED',
    deleteEvent: 'EVENT_DELETED'
}

//getallevents, select event from all, update event, delete event

export const getAllEvents = () => async (dispatch) =>{
    eventClient.get('').then(response => {
        dispatch({
            type: eventType.foundAll,
            payload: response.data
        })
    }).catch(error=>{
        console.log(error)
    })
}