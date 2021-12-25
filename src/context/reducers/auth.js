import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_AUTH_STATE
} from "../../constants/actionTypes";

/**
 * state này là initialState --> globalState
 * auth trong reducer này sẽ được gọi khi, có yêu cầu dispatch và data được trả về từ server
 */
const auth = (state, { type, payload }) => { // payload sẽ tương ứng với từng type
    switch (type) {
        case REGISTER_LOADING:
            console.log("register loading global state -->", state);
            return {
                ...state,
                loading: true,
            };

        case REGISTER_SUCCESS:
            console.log("register success global state -->", state);
            return {
                ...state,
                loading: false,
                data: payload
            };

        case REGISTER_FAIL:
            console.log("register fail global state -->", state);
            return {
                ...state,
                loading: false,
                error: payload
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