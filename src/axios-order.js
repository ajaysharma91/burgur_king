import axios from 'axios';

const instanceAxios = axios.create({
    baseURL:'https://react-burger-app-6d29b.firebaseio.com/'
});

export default instanceAxios;