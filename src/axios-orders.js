import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-beb91.firebaseio.com/'
});

export default instance;