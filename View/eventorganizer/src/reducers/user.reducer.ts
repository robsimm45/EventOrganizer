import { IcurrentUserState } from ".";
import { userTypes } from "../actions/user.action";

const initialState: IcurrentUserState = {
    self: {
        id : 0,
        firstName : '',
        lastName : '',
        email : ''
    },
    allUsers: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userTypes.Found_User : 
            return {
                ...state,
                self : action.payload
            }
        case userTypes.Found_All :
            return {
                ...state,
                allUsers : action.payload
            }
        default:
            return state
    }
}