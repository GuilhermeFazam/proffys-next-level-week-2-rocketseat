import axios from 'axios';

const api = axios.create({
    // URL DO EXPo + porta do servidor NODE
    // exp://192.168.15.50:19000
    baseURL: 'http://192.168.15.50:3333',
});

export default api;
