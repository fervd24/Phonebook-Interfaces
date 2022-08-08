import axios from 'axios';

const getPhonebooks = async(setPhonebook, setPhonebookList = null) => {
    const res = await axios.get('http://localhost:8080', { headers: {
      "x-token": localStorage.getItem('x-token'),
      "uid": localStorage.getItem('uid')
    }});
    
    setPhonebook(res.data.data.phoneBooks);
    setPhonebookList(res.data.data.phoneBooks);
    console.log('data', res.data.data.phoneBooks);
}

export default getPhonebooks;