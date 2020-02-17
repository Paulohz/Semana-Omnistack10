import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
   
});
console.log(api.data)
export default api;