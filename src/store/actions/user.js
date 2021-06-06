import * as actionTypes from './actionTypes';

export const switchEdit = () => {
    return{
        type: actionTypes.SWITCH_EDIT
    };
};

export const switchCreate = () => {
    console.log("Create")
    return{
        type: actionTypes.SWITCH_CREATE
    };
};