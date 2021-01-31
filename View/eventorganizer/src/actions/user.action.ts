import { userClient } from "../axios/user-client"

export const userTypes ={
    Not_Found: 'USER_NOT_FOUND',
    Found_User: 'FOUND_USER',
    Found_All: 'FOUND ALL'
}

export const getUserByID = (id:number) => async (dispatch) => {
    userClient.get('/id' + id).then(response=>{
        dispatch({
            type: userTypes.Found_User,
            payload: response.data
        })
    }).catch(error =>{
        console.log(error)
    })
}

export const getAllUsers = () => async (dispatch) => {
    userClient.get('').then(response =>{
        dispatch({
            type: userTypes.Found_All,
            payload: response.data
        })
    }).catch(error => {
        console.log(error)
    })
}