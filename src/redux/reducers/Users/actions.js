import userActionTypes from "./action-types";

const loginUser = (payload) => ({
    type: userActionTypes.LOGIN,
    payload,
})

const logoutUser = () => ({
    type: userActionTypes.LOGOUT,
})

const userActions = { loginUser, logoutUser }

export default userActions
