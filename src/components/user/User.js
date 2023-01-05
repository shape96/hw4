import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersOneAction } from '../../redux/actions/action';

function User({userInfo}) {
    const dispatch = useDispatch()
    

    
    const getOneUser = (event) => {
        dispatch(fetchUsersOneAction(event.target.value))
    }

    return (
        <ul>
            <li> name: {userInfo.name}</li>
            <li> email: {userInfo.email}</li>
            
          
            <button value={userInfo.id} onClick={getOneUser}>more info</button>
            
        </ul>
    );
}

export default User;