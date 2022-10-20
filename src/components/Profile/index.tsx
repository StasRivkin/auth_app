import React from 'react'
import { Link } from 'react-router-dom';
import ProfileData from './ProfileData';
import UpdateUser from './UpdateUser';

const Profile = () => {

    const handleClickLogout = () => {
        console.log('OK');
        //at that monent we don't need to use that method
    }

    return (
        <div>

            <ProfileData />
            <Link to='/home'><button onClick={handleClickLogout}>Logout</button></Link>
            <UpdateUser />

        </div>
    )
}

export default Profile