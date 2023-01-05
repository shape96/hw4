import {types} from "../types.js";


export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}


export function asyncFunctionAction () {
    
    return function (dispatch) {
        setTimeout (() => {
            dispatch(changeTitleAction())
        }, 2000) 
    }
}
export function getUsersAction (users) {
    return {
        type: types.GET_USERS,
        payload: users
    }
}

export function getOneUserAction (user) {
    return{
        type: types.GET_USER,
        payload: user
    }
}

export function fetchUsersAction () {
    return async function (dispatch) {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data  = await response.json()
        dispatch(getUsersAction(data))
        
    }
}


export function fetchUsersOneAction (id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data  = await response.json()
        dispatch(getOneUserAction(data))
        
    }
}