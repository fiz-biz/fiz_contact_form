import axios from 'axios';

 async function Axios(data) {
    try {
        await axios.post('http://localhost:5000/contact_us', data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    } catch (e) {
        return e
    }
}

export default Axios;