import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    console.log("auth_start")
    return{
        type: actionTypes.AUTH_START
    };
};

export const auth = (email, password, signup) => {
    console.log("...")
    return dispatch => {
        dispatch(authStart());
        const authData = {
            name: "tarun",
            email: "asdashdgasjdaaun@gmail.com",
            age: "10",
            password: "1234567890"
        };

        let url = 'http://localhost:9000/register';

        axios.post(url, authData)
        .then( response => {
            console.log(response.data);
        })
    }
}