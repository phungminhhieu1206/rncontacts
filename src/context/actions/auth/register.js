import {
    CLEAR_AUTH_STATE,
    REGISTER_FAIL,
    REGISTER_LOADING,
    REGISTER_SUCCESS
} from "../../../constants/actionTypes";
import axiosInstance from '../../../helpers/axiosInstance';

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    });
};

// action register
const register = ({
    email,
    password,
    userName: username, // cách map giữa field của client và field trên server
    firstName: first_name,
    lastName: last_name,
}) => (dispatch) => {
    dispatch({
        type: REGISTER_LOADING, // do mình thiết kế thêm cái màn hình loading
    });
    axiosInstance // đã chứa url base
        .post('auth/register', {
            email,
            password,
            username,
            first_name,
            last_name,
        })
        .then((res) => { // response trả về từ server sau lệnh post của axios
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => { // global state: error trả về từ server sau lệnh post của axios
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response
                    ? err.response.data // error của request post gửi từ server về
                    : { error: 'Something went wrong, try again !' }, // server xảy ra sự cố, thử tắt internet xem kqua
            });
        });
};

export default register;