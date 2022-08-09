import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Message } from '../ResponseMessage';

import PhoneDataGrid from './DataGrid';
import getPhonebooks from '../../api/getPhonebooks';
import createContact from '../../api/createContact';
import createContactValidations from '../../helper/createContactValidations';

import './Home.css';

const initialForm = {
  name: "",
  phone: ""
}

export default function Home() {
  const [phonebook, setPhonebook] = useState([]);
  const [phonebookList, setPhonebookList] = useState([]);
  const {
      form,
      errors,
      loading,
      response,
      handleChange,
      handleBlur,
      handleSubmit,
      responseErrorMsg
  } = useForm(initialForm, createContactValidations, createContact, setPhonebookList);

  useEffect(() => {
    getPhonebooks(setPhonebook, setPhonebookList);
  }, []);

  const logOut = () => {
    localStorage.setItem('x-token', '');
    localStorage.setItem('uid', '');
  }

  return (
    <>
    {
      localStorage.getItem('x-token') ?
      <div className='mainContainer'>
        <div className='mainSubcontainer'>
          <div className='addPhoneContainer'>
            <h1>Phone Book</h1>
            <form className='addphoneIptContainer' onSubmit={handleSubmit}>
              <div className='iptContainer'>
                <label htmlFor=''>Name: </label>
                <input 
                  name='name'
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.name}
                  className='addPhoneIpt' 
                />
                {errors.name && <span>{errors.name}</span>}
              </div>
              <div className='iptContainer'>
                <label htmlFor=''>Phone: </label>
                <input 
                  name='phone'
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.phone}
                  className='addPhoneIpt'
                />
                {errors.phone && <span>{errors.phone}</span>}
              </div>
              <input disabled={!form.name} type='submit' value='Add new number' className='addContactBtn'/>
   
              { loading && <p>Cargando...</p>}
              {response && <Message text="Contact created." bgColor="succesMsg"/>}
              {response === false && <Message text={responseErrorMsg} bgColor="errorMsg"/>}
            </form>
          </div>
          <div className='phoneListContainer'>  
            <PhoneDataGrid 
              phonebook={phonebook} 
              phonebookList={phonebookList} 
              setPhonebookList={setPhonebookList}
            />
          </div>
          <div className='logoutContainer'>
            <Link onClick={logOut} to="/" ><div className='logoutBtn'>Log out</div></Link>
          </div>
        </div>
      </div>: 
      <div>Error 404</div>
    }
    </>
  );
}
