import { IeventState } from ".";

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
