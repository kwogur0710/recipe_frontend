import axios from "axios"

export const Register = async(id, password, email, name, nickname) => {
    const serverURL = 'http://localhost:4000';
    return axios
    .post(
        `${serverURL}/auth/register`,
        {
            id : id,
            password : password,
            email : email,
            name : name,
            nickname : nickname
        }
    )
    .then((response) => {
        console.log(response);
        return response;
    })
    .catch((err) => {
        console.log(err);
        return err.response;
    })
}