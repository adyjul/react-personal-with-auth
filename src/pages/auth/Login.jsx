import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {login} from '../../utils/config/network';
import { Loading } from '../../component';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useInput } from '../../component';

const Login = ({isloginSuccess}) => {
    const navigate = useNavigate();
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [isLoading, setIsLoading] = useState(false);
    
    const loginInput = async () =>{
        setIsLoading(true);
        const {error,data} = await login({email,password});
        setIsLoading(false);
        if(!error){
            Swal.fire({
                title: `Berhasil!`,
                text: 'Anda berhasil login',
                icon: 'success',            
            }).then(() => {                                
                isloginSuccess({access :data.accessToken})
                navigate('/');
            })
        }        

    }    
    return (
        <>            
            { isLoading ?  <Loading/> : <div></div> }
            <section className="login-page">
            <h2>Yuk, login untuk menggunakan aplikasi.</h2>
            <div className="input-login">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={onEmailChange}  />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={onPasswordChange}  />
                <button type="button" onClick={() => loginInput()}>Login</button>
                </div>
                    <p>Belum punya akun? 
                        <Link to="/register">Daftar di sini</Link>                    
                    </p>
            </section>
        </>
    );
  }


  Login.propTypes = {
    isloginSuccess : PropTypes.func
  }


export default Login;