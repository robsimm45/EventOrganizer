import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { event } from "../../../models/event";
import { user } from "../../../models/user";
import { IState } from "../../../reducers";
import { createEvent } from "../../../actions/events.action"

interface IeventCreatorState {
    eventName: string
    eventStartDate: Date
    eventEndDate: Date
    eventLocation: string
}

interface IeventCreatorProps extends RouteComponentProps{
    currentUser: user
    createEvent: (currentEvent:event) => void

}


export class eventCreator extends React.Component<IeventCreatorProps,IeventCreatorState> {
    state = {
        eventName: '',
        eventStartDate: new Date(),
        eventEndDate: new Date(),
        eventLocation: ''
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
        let randomId = Math.floor(Math.random() * 1000000);
        let tempEvent:event = new event(randomId, this.state.eventName, 
            this.state.eventStartDate, this.state.eventEndDate, this.state.eventLocation, this.props.currentUser, []);

        try{
            this.props.createEvent(tempEvent);
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
        currentUser: state.currentUser.self
    }
}

const mapActionToProps = {
    createEvent
}


export default connect(mapStateToProps,mapActionToProps)(eventCreator)