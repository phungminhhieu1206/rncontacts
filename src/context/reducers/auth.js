import {
    REGISTER_LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            };

        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            };

        default:
            return state;
    }
};

export default auth;