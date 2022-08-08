import axios from 'axios';

export const delContactApiCall = async(id) => {
    try {
        
        await axios.delete(`http://localhost:8080/${id}`, {headers: {
                'x-token': localStorage.getItem('x-token'),
                'uid': localStorage.getItem('uid')
            }
        });
        window.location.reload(false);

    } catch (error) {
        console.log(error);
        alert(error);
    }
}
