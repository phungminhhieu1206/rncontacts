import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import LoginComponent from "../components/Login";
import login from "../context/actions/auth/login";
import { GlobalContext } from "../context/Provider";


const Login = () => {

    /**
     * giao diện --> form (text) --> có dữ liệu, làm thế nào để quản lý dữ liệu đó
     */

    // local state
    const [form, setForm] = useState({});
    const [justSignedUp, setJustSignedUp] = useState(false);
    const { params } = useRoute();

    React.useEffect(() => {
        if (params?.data) {
            // console.log('params ----> ', params);

            setJustSignedUp(true);
            setForm({
                ...form,
                userName: params.data.username
            })
        }
    }, [params])

    // global state
    const {
        authDispatch,
        authState: { error, loading }
    } = useContext(GlobalContext);

    const onChange = ({ name, value }) => {
        setJustSignedUp(false);
        setForm({
            ...form,
            [name]: value
        });
    };

    const onSubmit = () => {
        // console.log('hellooooooo', form);
        if (form.userName && form.password) {
            login(form)(authDispatch);
        }
    }

    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            error={error}
            loading={loading}
            justSignedUp={justSignedUp}
        />
    )
}

export default Login;