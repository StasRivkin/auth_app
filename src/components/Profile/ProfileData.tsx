import React from 'react'

const ProfileData = () => {

    const user = {
        'login': 'user-john',
        'firstName': 'John',
        'lastName': 'Smith',
        'roles': [
            'User'
        ]
    }

    return (
        <div>
            <p>First Name : {user.firstName}</p>
            <p>Last Name : {user.lastName}</p>

            <ul>
                {user.roles.map((i, ind) => <li key={ind}>{i}</li>)}
            </ul>


        </div>
    )
}

export default ProfileData