import React from 'react';
import { connect } from "react-redux";
import { IState } from '../../reducers';
import { getAllUsers } from '../../actions/user.action'
import { RouteComponentProps } from 'react-router';
import { user } from '../../models/user';

interface IprofileChooserState{
    allUsers: user[]
}

interface IprofileChooserProps extends RouteComponentProps{
    allUsers: user[]
    getAllUsers: () => void
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
    
    render(){
        return (
            <div>
                <form>
                    <label>
                        Choose your profile
                        <label></label>
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
    getAllUsers
}


export default connect(mapStateToProps,mapActionToProps)(profileChooser)