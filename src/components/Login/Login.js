
import {Link, Navigate} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Message } from '../ResponseMessage';
import loginApiCall from '../../api/loginApiCall';
import loginValidationsForm from '../../helper/loginValidationsForm';

import './Login.css';

const initialForm = {
    email: "",
    password: ""
};

export default function Login() {
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        responseErrorMsg
    } = useForm(initialForm, loginValidationsForm, loginApiCall);
    
    return(
        <>
        {
            localStorage.getItem('x-token') ?
            <Navigate to="/home" replace={true}/>:
            <div className="mainLoginContainer">
                <div className="loginSubcontainer">
                    <h2>Login</h2>
                    <form className='inputContainer' onSubmit={handleSubmit}>
                        <div className='inputSubContainer'>
                            <label>Email:</label>
                            <input 
                                name="email" 
                                type="email" 
                                onBlur={handleBlur} 
                                onChange={handleChange}
                                value={form.email}
                                className='iptElement'
                            />
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className='inputSubContainer'>
                            <label>Password:</label>
                            <input 
                                name="password" 
                                type="password" 
                                onBlur={handleBlur} 
                                onChange={handleChange}
                                value={form.password}
                                className='iptElement'
                            /> 
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className='signinContainer'>
                            { loading && <p>Cargando...</p>}
                            {response === false && <Message text={responseErrorMsg} bgColor="errorMsg"/>}
                            <input disabled={!form.email} className="signinBtn" type="submit" value="Sign in"/>  
                        </div>
                    </form>
                    { response && <Navigate to="/home" replace={true}/>}  
                    <Link to="/register" className='createAccountBtn'>Create an account</Link>
                </div>
            </div>
        }
        </>
    )
}