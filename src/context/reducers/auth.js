import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_AUTH_STATE,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_USER
} from "../../constants/actionTypes";

/**
 * state này là initialState --> globalState
 * auth trong reducer này sẽ được gọi khi, có yêu cầu dispatch và data được trả về từ server
 */
const auth = (state, { type, payload }) => { // payload sẽ tương ứng với từng type
    switch (type) {

        case LOGIN_LOADING:
        case REGISTER_LOADING:
            console.log("LOGIN/REGISTER -- LOADING global state -->", state);
            return {
                ...state,
                loading: true,
            };

        case LOGIN_SUCCESS:
            console.log("LOGIN -- SUCCESS global state -->", state);
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
            };

        case REGISTER_SUCCESS:
            console.log("REGISTER -- SUCCESS global state -->", state);
            return {
                ...state,
                loading: false,
                data: payload
            };

        case LOGIN_FAIL:
        case REGISTER_FAIL:
            console.log("LOGIN/REGISTER -- FAIL global state -->", state);
            return {
                ...state,
                loading: false,
                error: payload
            };

        case LOGOUT_USER:
            console.log("LOGOUT global state -->", state);
            return {
                ...state,
                loading: false,
                data: null,
                isLoggedIn: false,
            };

        case CLEAR_AUTH_STATE:
            console.log("clear auth global state -->", state);
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
            };

        default:
            return state;
    }
};

export default auth;