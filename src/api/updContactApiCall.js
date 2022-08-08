import axios from 'axios';

export const updContactApiCall = async(formInputs, setHaveSucces, setLoading, setPhonebookList, id) => {
    
    try {
        const {name, phone} = formInputs;
        
        await axios.put(`http://localhost:8080/${id}`, {name, phone}, {headers: {
            'x-token': localStorage.getItem('x-token'),
            'uid': localStorage.getItem('uid')
            }
        });
        setLoading(false);
        setHaveSucces(true);
        window.location.reload(false);
    } catch (error) {
        console.log(error);
        setLoading(false);
        setHaveSucces(false);
        //alert(error.response.data.message);
      }
}