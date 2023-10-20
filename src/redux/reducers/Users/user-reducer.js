import userActionTypes from "./action-types";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    const states = {
        [userActionTypes.LOGIN]: { ...state, currentUser: action.payload},
        [userActionTypes.LOGOUT]: { ...state, currentUser: null},
    }

    return states[action.type] ?? state;
}

export default userReducer;