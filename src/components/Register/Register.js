import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Message } from '../ResponseMessage';
import registerApiCall from '../../api/registerApiCall';
import registerValidationsForm from '../../helper/registerValidationsForm';


import './Register.css';

const initialForm = {
  name: "",
  email: "",
  password: "",
  confPassword: ""
}

export default function Register() {
 
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    responseErrorMsg
  } = useForm(initialForm, registerValidationsForm, registerApiCall);

  return (
    <>
      {
        localStorage.getItem('x-token') ?
        <div>Error 404</div>:
        <div className='registerContainer'>
          <form className='registerSubcontainer' onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className='registerInputContainer'>
              <label>Name:</label>
              <input 
                name="name" 
                type="text" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='registerInputContainer'>
              <label>Email:</label>
              <input 
                name="email" 
                type="email" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className='registerInputContainer'>
              <label>Password:</label>
              <input 
                name="password" 
                type="password" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.password}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className='registerInputContainer'>
              <label>Confirm Password:</label>
              <input 
                name="confPassword" 
                type="password" 
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.confPassword}
              />
              {errors.confPassword && <span>{errors.confPassword}</span>}
            </div>
            <div className='signupContainer'>
              { loading && <p>Cargando...</p>}
              {response && <Message text="Contact created." bgColor="succesMsg"/>}
              {response === false && <Message text={responseErrorMsg} bgColor="errorMsg"/>}
              <input className='signupBtn' type='submit' value="Sign Up"/>
            </div>
            <div className='goToSignin'>
              <Link to="/" >Sign in to your account</Link>
            </div>
          </form>
        </div>
      }
    </>
  )
}
