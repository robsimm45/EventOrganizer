import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { event } from "../../../models/event";
import { user } from "../../../models/user";
import { IState } from "../../../reducers";

interface IeventViewerState {
    canEdit: boolean
}

interface IeventViewerProps extends RouteComponentProps{
    currentUser: user
    currentEvent: event

}


export class eventViewer extends React.Component<IeventViewerProps,IeventViewerState> {
    state = {
        canEdit: false
    }

    componentWillMount(){
        this.canUserEdit()
    }

    canUserEdit = () => {
        if(this.props.currentUser === this.props.currentEvent.organizer){
            this.setState({
                canEdit: true
            })
        }
    }

    listRSVP = () =>{
        let RSVPlist = this.props.currentEvent.rsvp.map((user, i) => {
            <li key={i}>{user.firstName + ' ' + user.lastName}</li>
        });

        return RSVPlist;
    }

    render(){
        return(
            <div>
                <h2>{this.props.currentEvent.name}</h2>

                <label>Start Date</label>
                <p>{this.props.currentEvent.startDate.getDate()}</p>
                <label>Start Time</label>
                <p>{this.props.currentEvent.startDate.getTime()}</p>
                <label>End Date</label>
                <p>{this.props.currentEvent.endDate.getDate()}</p>
                <label>End Time</label>
                <p>{this.props.currentEvent.endDate.getTime()}</p>
                <label>Location</label>
                <p>{this.props.currentEvent.location}</p>
                <label>Organizer</label>
                <p>{this.props.currentEvent.organizer.firstName + ' ' + this.props.currentEvent.organizer.lastName} </p>
                <label>RSVP</label>
                <ul>
                    {this.listRSVP}
                </ul>

                {this.state.canEdit ? <Link to='/events/viewer/edit'><button>Edit</button></Link> : <div></div>}

            </div>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.currentUser.self,
        currentEvent: state.events.selectedEvent
    }
}

const mapActionToProps = {

}


export default connect(mapStateToProps,mapActionToProps)(eventViewer)