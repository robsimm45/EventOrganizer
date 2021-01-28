import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { updateEvent } from "../../../../actions/events.action";
import { event } from "../../../../models/event";
import { IState } from "../../../../reducers";

interface IeventEditorState {
    eventName: string
    eventStartDate: Date
    eventEndDate: Date
    eventLocation: string
}

interface IeventEditorProps extends RouteComponentProps{
    currentEvent: event
    updateEvent: (currentEvent:event) => void

}

export class eventEditor extends React.Component<IeventEditorProps,IeventEditorState> {
    // field for name, start date, start time, end date, end time, location, 

    state = {
        eventName: this.props.currentEvent.name,
        eventStartDate: this.props.currentEvent.startDate,
        eventEndDate: this.props.currentEvent.endDate,
        eventLocation: this.props.currentEvent.location
    }

    handleNameChange = (Event) =>{
        Event.preventDefault();
        this.setState({
            eventName: Event.target.value
        })
    }

    handleStartDateChange = (Event) =>{
        Event.preventDefault();
        let tempStartDate = this.state.eventStartDate;
        tempStartDate.setDate(Event.target.value);
        this.setState({
            eventStartDate: tempStartDate
        })
    }

    handleStartDateTimeChange = (Event) =>{
        Event.preventDefault();
        let tempStartDate = this.state.eventStartDate;
        tempStartDate.setTime(Event.target.value);
        this.setState({
            eventStartDate: tempStartDate
        })
    }

    handleEndDateChange = (Event) =>{
        Event.preventDefault();
        let tempEndDate = this.state.eventEndDate;
        tempEndDate.setDate(Event.target.value);
        this.setState({
            eventEndDate: tempEndDate
        })
    }

    handleEndDateTimeChange = (Event) =>{
        Event.preventDefault();
        let tempEndDate = this.state.eventEndDate;
        tempEndDate.setDate(Event.target.value);
        this.setState({
            eventEndDate: tempEndDate
        })
    }

    handleEventLocationChange = (Event) =>{
        Event.preventDefault();
        this.setState({
            eventLocation: Event.target.value
        })
    }

    handleSubmit = (Event) =>{
        let tempEvent = this.props.currentEvent;
        tempEvent.name = this.state.eventName;
        tempEvent.startDate = this.state.eventStartDate;
        tempEvent.endDate = this.state.eventEndDate;
        tempEvent.location = this.state.eventLocation;

        try{
            this.props.updateEvent(tempEvent);
        } catch (err){
            console.log(err);
        }
    }


    render(){
        return(
            <div>
                <label>Change Name</label>
                <input type='text' value={this.state.eventName} onChange={this.handleNameChange}/>
                <label>Change Start Date</label>
                <input type='date' value={this.state.eventStartDate.getDate()} onChange={this.handleStartDateChange}/>
                <label>Change Start Time</label>
                <input type='time' value={this.state.eventStartDate.getTime()} onChange={this.handleStartDateTimeChange}/>
                <label>Change End Date</label>
                <input type='date' value={this.state.eventEndDate.getDate()} onChange={this.handleEndDateChange}/>
                <label>Change End Time</label>
                <input type='time' value={this.state.eventEndDate.getTime()} onChange={this.handleEndDateTimeChange}/>
                <label>Change Location</label>
                <input type='text' value={this.state.eventLocation} onChange={this.handleEventLocationChange}/>

                <button onSubmit={this.handleSubmit}> Submit </button>
            </div>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentEvent: state.events.selectedEvent
    }
}

const mapActionToProps = {
    updateEvent
}


export default connect(mapStateToProps,mapActionToProps)(eventEditor)