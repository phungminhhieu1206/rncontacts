import React, { useContext, useState } from "react";
import RegisterComponent from "../components/Register";
import register from "../context/actions/auth/register";
import { GlobalContext } from '../context/Provider';

const Register = () => {
    // state local
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    // state global
    const {
        authDispatch,
        authState:{error, loading, data}
    } = useContext(GlobalContext);

    // console.log('form >>>', form);
    // console.log('authDispatch >>> ', authDispatch);

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        // reset error when form not empty
        if (value !== '') {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'This field needs minimize 6 characters' };
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]: null };
                });
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: 'This field is required' };
            });
        }
    };

    const onSubmit = () => {
        if (!form.userName) {
            setErrors((prev) => {
                return { ...prev, userName: 'Please add a username' };
            });
        }
        if (!form.firstName) {
            setErrors((prev) => {
                return { ...prev, firstName: 'Please add a  first name' };
            });
        }
        if (!form.lastName) {
            setErrors((prev) => {
                return { ...prev, lastName: 'Please add a last name' };
            });
        }
        if (!form.email) {
            setErrors((prev) => {
                return { ...prev, email: 'Please add a email' };
            });
        }
        if (!form.password) {
            setErrors((prev) => {
                return { ...prev, password: 'Please add a password' };
            });
        }

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
        ) {
            // console.log('11111 >>>', Object.values(form), 11111);
            // Ngay tại đây, mình cần tạo actions để dispatch action register đó đến server -> vào context tạo
            // Trong action of context -> dùng axios để tạo request
            register(form)(authDispatch);

        }
    };

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    )
}

export default Register;