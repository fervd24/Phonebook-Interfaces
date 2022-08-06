import { useState } from 'react';

export const useForm = (initialForm, validateForm, apiCall, setPhonebookList, id) => {
    
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [responseErrorMsg, setResponseErrorMsg] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setForm({
            ...form,
            [name]: value
        });
        
    }

    const handleBlur = (e) => {

        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0) {
            setLoading(true);
            apiCall(form, setResponse, setLoading, setPhonebookList, id, setResponseErrorMsg);
        }
        
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit,
        responseErrorMsg
    }
}
