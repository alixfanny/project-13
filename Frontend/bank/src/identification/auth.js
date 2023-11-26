import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3001',
});

let logged = () => {
  let token = localStorage.getItem('token');
  return token;
};

let token = localStorage.getItem('token');

Axios.interceptors.request.use((request) => {
  if (logged()) {
    request.headers.Authorization = 'Bearer ' + token;
  }

  return request;
});

export default Axios;
