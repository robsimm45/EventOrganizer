import { eventClient } from "../axios/event-client"

export const eventType = {
    foundAll: 'ALL_EVENTS_FOUND',
    selectedEvent: 'EVENT_SELECTED',
    createdEvent: 'EVENT_CREATED',
    editedEvent: 'EVENT_CHANGED',
    updatedEvent: 'EVENT_UPDATED',
    deletedEvent: 'EVENT_DELETED'
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

export const selectEvent = (currentEvent:Event) => dispatch =>{
    dispatch({
        type: eventType.selectedEvent,
        payload: currentEvent
    });
}

export const updateEvent = (currentEvent:Event) => async dispatch =>{
    try{
        const response = await eventClient.patch('', currentEvent);
        if(response.status == 200){
            const newResponse = await eventClient.get('');
            if(newResponse.status == 200){
                dispatch({
                    type: eventType.updatedEvent,
                    payload: newResponse.data
                });  
            }
            
        }
    } catch(err) {
        console.log(err);
    }
}

export const createEvent = (currentEvent:Event) => async dispatch =>{
    try{
        const response = await eventClient.post('', currentEvent);
        if(response.status == 200){
            const newResponse = await eventClient.get('');
            if(newResponse.status == 200){
                dispatch({
                    type: eventType.createdEvent,
                    payload: newResponse.data
                })
            }
        }
    } catch(err) {
        console.log(err);
    }
}

export const deleteEvent = (eventId:number) => async dispatch =>{
    try{
        const response = await eventClient.delete('' + eventId);
        if(response.status == 200){
            const newResponse = await eventClient.get('');
            if(newResponse.status == 200){
                dispatch({
                    type: eventType.deletedEvent,
                    payload: newResponse.data
                });
            }
        }
    } catch(err) {
        console.log(err);
    }
}