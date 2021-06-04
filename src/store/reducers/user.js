import * as actionTypes from "../actions/actionTypes";

const initialState = {
    edit_modal: false
};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.SWITCH_EDIT:
            return{
                ...state,
                edit_modal: !state.edit_modal
            }

        default:
            return state;
    }
}


export default reducer;
