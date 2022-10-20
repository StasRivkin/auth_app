import React, { useState } from 'react';


interface Props {
  close: () => void;
}

const ChangePassword = ({ close }: Props) => {

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  return (
    <div>

      <div>
        <label>Old Password :
          <input
            type="password"
            placeholder='old password'
            value={oldPass}
            onChange={e => setOldPass(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>New Password :
          <input
            type="password"
            placeholder='new password'
            value={newPass}
            onChange={e => setNewPass(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>Confirm New Password :
          <input
            type="password"
            placeholder='new password'
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
          />
        </label>
      </div>

      <button onClick={() => {
        console.log(oldPass, newPass, confirmPass);
      }}>Save</button>

      <button onClick={close}>Return</button>
      
      <button onClick={() => {
        setOldPass('');
        setNewPass('');
        setConfirmPass('');
      }}>Clear</button>

    </div>
  )
}

export default ChangePassword