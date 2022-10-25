import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { UserProfile } from '../../utils/types'

const ProfileData = () => {
    

    const user = useAppSelector<UserProfile>(state => state.user as UserProfile);
    
    return (
        <div>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <ul>
                {user.roles.map(r => <li key={r}>{r}</li>)}
            </ul>
        </div>
    )
}

export default ProfileData