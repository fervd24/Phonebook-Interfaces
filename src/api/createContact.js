import axios from 'axios';
import getPhonebooks from './getPhonebooks';

const createContact = async(formInputs, setResponse, setLoading, setPhonebookList, id, setResponseErrorMsg) => {
    try {
        const { name, phone } = formInputs;
      
        await axios.post('http://localhost:8080/', {name, phone}, {headers: {
            "x-token": localStorage.getItem('x-token'),
            "uid": localStorage.getItem('uid')
        }});
        setLoading(false);
        getPhonebooks(setPhonebookList);

        setResponse(true);
        
        setTimeout(() => {
            setResponse(null);
        }, 4000)
        
        } catch (error) {
            console.log(error);
            setResponseErrorMsg(error.response.data.message);
            setLoading(false);
            setResponse(false);
            setTimeout(() => {
                setResponse(null);
            }, 4000)
        }
}

  export default createContact;