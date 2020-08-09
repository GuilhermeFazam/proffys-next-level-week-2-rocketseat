import axios from 'axios';

const api = axios.create({
    // URL DO EXPo + porta do servidor NODE
    baseURL: 'http://192.168.1.13:3333',
});

export default api;
