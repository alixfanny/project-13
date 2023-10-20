import axios from 'axios';

const login = (data) => {
    return(
        axios.post(`http://localhost:3001/login`, data)
    )
}

export const datas = {login}