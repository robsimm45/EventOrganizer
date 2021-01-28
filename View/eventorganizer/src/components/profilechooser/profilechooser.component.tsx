import React from 'react';
import { connect } from "react-redux";
import { IState } from '../../reducers';
import { getUserByID, getAllUsers } from '../../actions/user.action'
import { RouteComponentProps } from 'react-router';
import { user } from '../../models/user';

interface IprofileChooserState{
    allUsers: user[]
    selectedUser: number
}

interface IprofileChooserProps extends RouteComponentProps{
    allUsers: user[]
    getAllUsers: () => void
    getUserByID: (id:number) => void
}

export class profileChooser extends React.Component<IprofileChooserProps, IprofileChooserState>{
    
    componentWillMount(){
        try{
            this.props.getAllUsers();
        } catch (err){
            console.log(err);
        }

        this.setState({
            allUsers : this.props.allUsers
        })
    }

    showAllUsers = () =>{
        let showUsers = this.props.allUsers.map((user, id) =>{
            return(
                <option key={id} value={user.id}>{user.firstName + ' ' + user.lastName}</option>
            )
        })

        return showUsers;
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            selectedUser : event.target.value
        })
    }

    submitChange = (event) => {
        event.preventDefault()
        try{
            this.props.getUserByID(this.state.selectedUser);
        } catch (err) {
            console.log(err)
        }
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.submitChange}>
                    <label>
                        Choose your profile
                        <select value={this.state.selectedUser} onChange={this.handleChange}>
                            {this.showAllUsers}
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state:IState) =>{
    return{
        allUsers: state.currentUser.allUsers
    }
}

const mapActionToProps = {
    getAllUsers,
    getUserByID
}


export default connect(mapStateToProps,mapActionToProps)(profileChooser)