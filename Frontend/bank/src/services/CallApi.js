import Axios from '../identification/auth';

const login = (data) => {
    return Axios.post('/api/v1/user/login', data)
}

const username = () => {
    return(
        Axios.post('/api/v1/user/profile')
    )
}

const updateUsername = (firstname, lastname) => {
    return Axios.put('/api/v1/user/profile', {
        "firstName": firstname,
        "lastName": lastname
      });
};

export const datas = { login, username, updateUsername };


