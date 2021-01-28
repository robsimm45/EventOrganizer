import React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";


export class eventViewer extends React.Component<any,any> {
    
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


export default connect(mapStateToProps,mapActionToProps)(eventViewer)