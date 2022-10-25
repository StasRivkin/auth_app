import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { updateUser } from '../../reducers/asyncActions/asyncActions';

interface Props {
    close: () => void
}

const EditUser = ({close}: Props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useAppDispatch();

  const handleClickSave = () => {
    dispatch(updateUser(firstName, lastName));
    close();
  }

  const handleClickClear = () => {
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <label>First name:
        <input
          type='text'
          value={firstName}
          onChange={e => setFirstName(e.target.value.trim())}
        />
      </label>
      <label>Last name:
        <input
          type='text'
          value={lastName}
          onChange={e => setLastName(e.target.value.trim())}
        />
      </label>
      <button onClick={handleClickSave}>Save and close</button>
      <button onClick={handleClickClear}>Clear</button>
      <button onClick={close}>Close without save</button>
    </div>
  )
}

export default EditUser