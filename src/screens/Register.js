import React, { useState } from "react";
import RegisterComponent from "../components/Register";
import axiosInstance from "../helpers/axiosInstance";

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    React.useEffect(() => {
        axiosInstance.get('/contacts/').catch((err) => {
            console.log('err >>>--------------------\n', err.response);
        });
    }, []);

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
        console.log("error prev >>> ", JSON.stringify(errors));
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
    };

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
        />
    )
}

export default Register;