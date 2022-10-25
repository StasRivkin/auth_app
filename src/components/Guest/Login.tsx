import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { fetchUser } from '../../reducers/asyncActions/asyncActions';
import { createToken } from '../../utils/const';


const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    //const navigate = useNavigate()


    const handleClickLogin = () => {
        dispatch(fetchUser(createToken(login, password)));

        //navigate('/home/profile');
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('');
    }

    return (
        <div>
            <label>Login:
                <input
                    type={'text'}
                    onChange={e => setLogin(e.target.value.trim())}
                    value={login}
                />
            </label>
            <label>Password:
                <input
                    type={'password'}
                    onChange={e => setPassword(e.target.value.trim())}
                    value={password}
                />
            </label>
            <button onClick={handleClickLogin}>Login</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default Login