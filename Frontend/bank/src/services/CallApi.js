import axios from 'axios';


const login = (data) => {
    return axios.post(`http://localhost:3001/api/v1/user/login`, data)
    
}

const username = () => {
    return(
        axios.post('http://localhost:3001/api/v1/user/profile')
    )
}

const updateUsername = (newUserData) => {
    return axios.put('http://localhost:3001/api/v1/user/profile', newUserData);
};

export const datas = { login, username, updateUsername };


