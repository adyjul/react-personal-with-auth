import {useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Loading } from '../../component/index.js';
import {register} from '../../utils/config/network.jsx';
import { useInput } from '../../component/index.js';

const Register = () => {
    const navigate = useNavigate();
    const [name, onName] = useInput('');
    const [isloading,onIsLoading] = useState(false);
    const [email, onEmailChange] = useInput('');
    const [password, onPassword] = useInput('');
    const [confirmPassword, onConfirmPassword] = useInput('');

    async function registerUser(){
        
        if(password !== confirmPassword){
            Swal.fire({
                icon : 'error',
                title : 'Error !!',
                text : 'Password tidak sama'
            })
        }else{            
            onIsLoading(true);
            const data = await register({name,email,password});
            onIsLoading(false)
            !data.error ? navigate('/login') : navigate('/register');
        }

    }


    return(
        <>
            {isloading ?  <Loading/> : <div></div>}
            <section className="regsiter-page">
                <h2>Isi form untuk mendaftar akun.</h2>
                <div className="input-register">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={onName} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={onEmailChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={onPassword} />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPassword} />
                    <button type="button" onClick={() => registerUser()}>Register</button>
                </div>
                <p>Sudah punya akun? 
                    <Link to="/login">Login di sini</Link>                
                </p>
            </section>

        </>
    )
}

export default Register;