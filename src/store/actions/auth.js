import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    console.log("auth_start")
    return{
        type: actionTypes.AUTH_START
    };
};

export const switchSign = () => {
    return{
        type: actionTypes.SWITCH_SIGN
    }
}

export const auth = (name, email, pass) => {
    console.log(name,email,pass)
    return dispatch => {
        dispatch(authStart());
        const authData = {
            name: name,
            email: email,
            password: pass
        };

        let url = 'http://localhost:9000/register';

        axios.post(url, authData)
        .then( response => {
            console.log(response.data);
        })
    }
}