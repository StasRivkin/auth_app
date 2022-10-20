import React, {useState} from 'react';

interface Props {
  close: () => void;
}

const EditUser = ({ close }: Props) => {

  const [userName, setUserName] = useState('');

  return (
    <div>
      <label>New User Name :
        <input 
        type="text"
        placeholder='new user name' 
        value={userName}
        onChange={e => setUserName(e.target.value)}
        />
      </label>

      <button onClick={() => {
        console.log(userName);
      }}>Save</button>
      <button onClick={close}>Return</button>
    </div>
  )
}

export default EditUser