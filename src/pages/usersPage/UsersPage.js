import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../../components/user/User';
import { fetchUsersAction, } from '../../redux/actions/action';


function UsersPage() {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.usersReducer)
    const {user} = useSelector(state => state.OneUserReducer)

    
    const getUsers = () => {
        dispatch(fetchUsersAction())
    }

  
    return (
        <div>
            <ul>
                <li>name:{user.name}</li>
                <li>address:{user.address?.street}</li>
                <li>email:{user.email}</li>
                <li>username:{user.username}</li>
            </ul>
            <button onClick={getUsers}>get users</button>
            {users.map (user =>  <User key={user.id} userInfo={user}/>)}

        </div>
    );
}

export default UsersPage;