import React, { useState } from 'react'
import { changePassword, editUser } from '../../utils/constants';
import ChangePassword from './ChangePassword';
import EditUser from './EditUser';

const UpdateUser = () => {

    const [updateAction, setUpdateAction] = useState<typeof changePassword| typeof editUser| ''>('')

    switch (updateAction) {
        case editUser:
            return <EditUser close={() => setUpdateAction('')} />;
        case changePassword:
            return <ChangePassword close={() => setUpdateAction('')} />;
        default:
            return (
                <div>
                    <button onClick={() => setUpdateAction(changePassword)}>Change Password</button>
                    <button onClick={() => setUpdateAction(editUser)}>Edit user profile</button>
                </div>
            )
    }
}

export default UpdateUser