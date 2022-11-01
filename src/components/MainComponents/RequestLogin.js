import axios from "axios"

export const RequestLogin = async(id, password) => {
    const serverURL = 'http://localhost:4000';
    return axios
    .post(
        `${serverURL}/auth/login`,
        {
            id : id,
            password : password
        }
    )
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((err) => {
        console.log('err : ',err);
        return err.response;
    })
}