import React, { useEffect, useRef } from 'react'
import { updContactApiCall } from '../../api/updContactApiCall';
import createContactValidations from '../../helper/createContactValidations';
import { useForm } from '../../hooks/useForm';

import './UpdForm.css';



export const UpdForm = ({closeModal, setPhonebookList, currData}) => {
    const {_id, name, phone} = currData;
    const initialForm = {
        name,
        phone
      }
      
    const {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, createContactValidations, updContactApiCall, setPhonebookList, _id);

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className='updFormContainer'>
            <div className='updIptContainer'>
                <label htmlFor=''>Name: </label>
                <input 
                    ref={inputRef}
                    name='name'
                    type='text'
                    //value={form.name}
                    defaultValue={name}
                    onBlur={handleBlur}
                    onChange={handleChange} 
                />
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div className='updIptContainer'>
                <label htmlFor=''>Phone: </label>
                <input 
                    name='phone'
                    type='number'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    defaultValue={phone}
                    //value={form.phone}
                />
                {errors.phone && <span>{errors.phone}</span>}
            </div>
            <div className='updBtnsContainer'>
                <button 
                    className='updFormBtns  updBtn'
                    type='submit'
                >Confirm</button>
                <button 
                    type='button'
                    onClick={closeModal} 
                    className='updFormBtns cancelBtn'
                >Cancel</button>
            </div>
        </form>
    )
}
