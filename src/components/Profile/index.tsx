import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { deleteToken } from '../../reducers/tokenSlice';
import { logOutUser } from '../../reducers/userSlice';
import ProfileData from './ProfileData';
import UpdateUser from './UpdateUser';

const Profile = () => {

    const dispatch = useAppDispatch()

    const handleClickLogout = () => {
        dispatch(logOutUser());
        dispatch(deleteToken());
    }
    return (
        <div>
            <ProfileData />
            <button onClick={handleClickLogout}>Logout</button>
            <UpdateUser />
        </div>
    )
}

export default Profile