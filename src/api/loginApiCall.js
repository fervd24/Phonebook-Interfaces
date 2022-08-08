import axios from 'axios';

const loginApiCall = async(formInputs, setResponse, setLoading, setPhonebookList, id, setResponseErrorMsg) => {
    try {
        const {email, password} = formInputs;

        const res = await axios.post('http://localhost:8080/auth/login', {email, password});
        
        setLoading(false);

        localStorage.setItem('x-token', res.data.token);
        localStorage.setItem('uid', res.data.data);
        

        setResponse(true);

    } catch (error) {
        setLoading(false);
        setResponse(false);
        setResponseErrorMsg(error.response.data.msg);
        setTimeout(() => {
            setResponse(null);
        }, 4000);
    }
}

export default loginApiCall;