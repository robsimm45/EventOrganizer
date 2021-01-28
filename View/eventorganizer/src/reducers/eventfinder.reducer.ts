/* const initialState: IeventViewerState = {
    selectedEvent: {
        id : 0,
        startDate: null,
        endDate: null,
        location: '',
        organizer: null,
        rsvp: []
    }
} 

for event creator*/

import { IeventFinderState } from ".";

const initialState: IeventFinderState = {
    allEvents: []
}

export const eventFinderReducer = (state = initialState, action ) => {

}