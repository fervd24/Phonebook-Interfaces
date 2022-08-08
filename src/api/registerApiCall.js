import axios from 'axios';

const registerApiCall = async( formInputs, setResponse, setLoading, setPhonebookList, id, setResponseErrorMsg) => {
    try {
        const {name, email, password} = formInputs;

        await axios.post('http://localhost:8080/users', { name, email, password });

        setLoading(false);
        //alert('User created succesfully!');
        
        setResponse(true);

        setTimeout(() => {
            setResponse(null);
            window.location.reload(false);
        }, 4000);

    } catch (error) {
        setLoading(false);
        setResponse(false);
        setResponseErrorMsg(error.response.data.msg);
        setTimeout(() => {
            setResponse(null);
        }, 4000);
    }
  }

  export default registerApiCall;