import React, { useContext, useState } from "react";
import {
    View,
    Text
} from "react-native";
import CreateContactComponent from "../components/CreateContactComponent";
import createContact from "../context/actions/contacts/createContact";
import { GlobalContext } from "../context/Provider";
import {useNavigation, useRoute} from '@react-navigation/native';
import {CONTACT_DETAIL, CONTACT_LIST} from '../constants/routeNames';

const CreateContact = () => {
    /**
     * Sau khi tạo xong giao diện ở các component con
     * Chúng ta sẽ cần quản lý và lấy dữ liệu form từ đó
     * Khai báo các local state đó tại component cha.
     */

    const {
        contactDispatch,
        contactState: {
            createContact: { loading, error }
        },
    } = useContext(GlobalContext);

    const {navigate} = useNavigation();

    const [form, setForm] = useState({});

    const onChangeText = ({ name, value }) => {
        setForm({
            ...form,
            [name]: value
        });
    };

    const onSubmit = () => {

        /**
         * form: dữ liệu truyền vào action
         * contactDispatch: kiểu dispatch tương ứng
         * onSuccess: hàm callback giúp navigate sau khi success
         */
        createContact(form)(contactDispatch)(() => {
            navigate(CONTACT_LIST);
        });
        // console.log('error 1 ----> ', error);
    }



    return (
        <CreateContactComponent
            form={form}
            onChangeText={onChangeText}
            onSubmit={onSubmit}
            setForm={setForm}
            loading={loading}
            error={error}
        />
    )
}

export default CreateContact;