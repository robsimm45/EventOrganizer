import React from "react";
import { connect } from "react-redux";
import { event } from "../../models/event";
import { user } from "../../models/user";
import { IState } from "../../reducers";
import { selectEvent, getAllEvents } from "../../actions/events.action"
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

interface IeventFinderState {
    allEvents: event[]
}

interface IeventFinderProps extends RouteComponentProps{
    currentUser: user
    allEvents: event[]
    getAllEvents: () => void
    selectEvent: (currentEvent:event) => void
}

export class eventFinder extends React.Component<IeventFinderProps,IeventFinderState> {
    state = {
        allEvents: []
    }


    componentWillMount(){
        try{
            this.props.getAllEvents();
        } catch (err){
            console.log(err);
        }

        this.setState({
            allEvents : this.props.allEvents
        })
    }

    handleClick = (event) => {
        try{
            this.props.selectEvent(event.target.value)
            
        } catch (err){
            console.log(err)
        }
    }

    createButtonList = () => {
        let clickAllEvents = this.props.allEvents.map((event, i) => {
            <li key={i}><Link to='/events/${event.id}'><button onClick={this.handleClick}>{event.name}</button></Link></li> 
        });

        return clickAllEvents;
    }

    render() {
        return(
            <div>
                <div>
                    <Link to='/events/new'>
                        <button>Add Event</button>
                    </Link>
                </div>
                <div>
                    <label> Select Event </label>
                    <ul>
                        {this.createButtonList}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        currentUser: state.currentUser.self,
        allEvents: state.events.allEvents
    }
}

const mapActionToProps = {
    getAllEvents,
    selectEvent
}


export default connect(mapStateToProps,mapActionToProps)(eventFinder)