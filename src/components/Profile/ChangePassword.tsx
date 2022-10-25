import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { changePassword } from '../../reducers/asyncActions/asyncActions';


interface Props {
  close: () => void
}

const ChangePassword = ({ close }: Props) => {
  const [oldPassword, setOldPassword] = useState('')
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const dispatch = useAppDispatch();

  const handleClickSave = () => {
    if (pass1 === pass2) {
      dispatch(changePassword(oldPassword, pass1));
      close();
    }
  }

  const handleClickClear = () => {
    setOldPassword('');
    setPass1('');
    setPass2('');
  }

  return (
    <div>
      <label>old password:
        <input
          onChange={e => setOldPassword(e.target.value.trim())}
          value={oldPassword}
          type='password'
        />
      </label>
      <label>new password:
        <input
          onChange={e => setPass1(e.target.value.trim())}
          value={pass1}
          type='password'
        />
      </label>
      <label>repeat new password:
        <input
          onChange={e => setPass2(e.target.value.trim())}
          value={pass2}
          type='password'
        />
      </label>
      <button onClick={handleClickSave}>Save and close</button>
      <button onClick={handleClickClear}>Clear</button>
      <button onClick={close}>Close without save</button>
    </div>
  )
}

export default ChangePassword