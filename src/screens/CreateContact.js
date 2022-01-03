import React, { useContext, useRef, useState } from "react";
import {
    View,
    Text
} from "react-native";
import CreateContactComponent from "../components/CreateContactComponent";
import createContact from "../context/actions/contacts/createContact";
import { GlobalContext } from "../context/Provider";
import { useNavigation, useRoute } from '@react-navigation/native';
import { CONTACT_DETAIL, CONTACT_LIST } from '../constants/routeNames';
import uploadImage from "../helpers/uploadImage";

const CreateContact = () => {
    /**
     * Sau khi tạo xong giao diện ở các component con
     * Chúng ta sẽ cần quản lý và lấy dữ liệu form từ đó
     * Khai báo các local state đó tại component cha.
     */

    // use to load global state and dispatch when you create contact
    const {
        contactDispatch,
        contactState: {
            createContact: { loading, error }
        },
    } = useContext(GlobalContext);

    // use to image picker
    const sheetRef = useRef(null);

    // use to navigate if create success
    const { navigate } = useNavigation();

    // use to get value from form create contact
    const [form, setForm] = useState({});

    // save image local
    const [localFile, setLocalFile] = useState(null);
    const [uploading, setIsUploading] = useState(false);

    const onChangeText = ({ name, value }) => {
        setForm({
            ...form,
            [name]: value
        });
    };

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };

    const openSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.open();
        }
    };

    const toggleValueChange = () => {
        setForm({ ...form, 'isFavorite': !form.isFavorite });
    };

    const onFileSelected = (image) => {
        closeSheet();
        setLocalFile(image);
        // console.log('images -->', image);
    };

    const onSubmit = () => {

        /**
         * form: dữ liệu truyền vào action
         * contactDispatch: kiểu dispatch tương ứng
         * onSuccess: hàm callback giúp navigate sau khi success
         */

        // console.log('form ----', form);

        if (localFile?.size) {
            // console.log('localFile choose -->', localFile);
            setIsUploading(true);
            uploadImage(localFile)((url) => {
                setIsUploading(false);

                console.log('after upload image url --->', url);

                createContact({ ...form, contactPicture: url })(contactDispatch)(() => {
                    navigate(CONTACT_LIST);
                });
            })((err) => {
                console.log('after upload image err --->', err);
                setIsUploading(false);
            });

        }

        // console.log('error 1 ----> ', error);
    }



    return (
        <CreateContactComponent
            form={form}
            onChangeText={onChangeText}
            onSubmit={onSubmit}
            setForm={setForm}
            loading={loading || uploading}
            error={error}
            toggleValueChange={toggleValueChange}
            sheetRef={sheetRef}
            openSheet={openSheet}
            closeSheet={closeSheet}
            onFileSelected={onFileSelected}
            localFile={localFile}
        />
    )
}

export default CreateContact;