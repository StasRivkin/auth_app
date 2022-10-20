import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = () => {
        console.log(login, password);//FIXME
    }

    const handleClickClear = () => {
        setLogin('');
        setPassword('')
    
    }

    return (
        <div>

            <label>Login:
                <input type="text"
                    onChange={(e) => setLogin(e.target.value.trim())}
                    value={login}
                />
            </label>


            <label>Password:
                <input type="password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                    value={password}
                />
            </label>

            <div>
                <Link to={`/home/${login||'profile'}`}><button onClick={handleClickLogin}>Login</button> </Link> 
                {/* I've made this path temporarily until we bind the user to our store , after we'll get a user from the stote, we need change login||profile to it's name */}
                
                <button onClick={handleClickClear}>Clear</button>
            </div>

        </div>
    )
}

export default Login