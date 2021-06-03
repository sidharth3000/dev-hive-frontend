import * as actionTypes from "../actions/actionTypes";

const initialState = {
    token: null,
    userId: null,
    loading: false,
    modal_show: false
};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.AUTH_START:
            return{
                state
            }

        case actionTypes.SWITCH_SIGN:
            return{
                ...state,
                modal_show: !state.modal_show
            }

        default:
            return state;
    }
}

export default reducer;