import {
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAIL
} from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInstance";

const getContacts = () => (dispatch) => {
    dispatch({
        type: GET_CONTACTS_LOADING,
    });
    axiosInstance.get('/contacts').then((res) => {
        dispatch({
            type: GET_CONTACTS_SUCCESS,
            payload: res.data
        });
    }).catch((err) => {
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: err.response
                ? err.response.data
                : { error: 'Something went wrong, try again !' },
        });
    })
}

export default getContacts;