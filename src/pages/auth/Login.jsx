import { useState } from 'react';
import { Link } from 'react-router-dom';

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    const handleValueChange = (event) => setValue(event.target.value);
    return [value, handleValueChange];
}

const Login = () => {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
  
    return (
        <section className="login-page">
        <h2>Yuk, login untuk menggunakan aplikasi.</h2>
        <div className="input-login">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={onEmailChange}  />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={onPasswordChange}  />
            <button type="button">Login</button>
            </div>
                <p>Belum punya akun? 
                    <Link to="/register">Daftar di sini</Link>                    
                </p>
        </section>
    );
  }



export default Login;