import React, {
    useCallback,
    useContext,
    useEffect,
    useState
} from "react";
import RegisterComponent from "../components/Register";
import register, { clearAuthState } from "../context/actions/auth/register";
import { GlobalContext } from '../context/Provider';
import axiosInstance from "../helpers/axiosInstance";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { LOGIN } from "../constants/routeNames";

const Register = () => {
    const { navigate } = useNavigation();

    // state local
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});


    // React.useEffect(() => {
    //     axiosInstance.get('/contacts').catch((err) => {
    //         console.log("err axios --> ", err);
    //     });
    // }, [])

    // state global
    const {
        authDispatch,
        authState: { error, loading, data }
    } = useContext(GlobalContext);

    // navigate to LOGIN if data of global state has value
    // useEffect(() => {
    //     if (data) {
    //         navigate(LOGIN);
    //     }
    // }, [data])

    useFocusEffect(
        useCallback(() => {
            return () => {
                if (data || error) {
                    clearAuthState()(authDispatch);
                }
            }
        }, [data, error]),
    );

    // console.log('form >>>', form);
    // console.log('authDispatch >>> ', authDispatch);
    // console.log('global error --> ', error);

    /**
     * 1. check validate khi đang change text input
     */
    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        // reset error when form not empty
        if (value !== '') {
            if (name === 'password') {
                if (value.length < 8) {
                    setErrors((prev) => {
                        return { ...prev, [name]: 'This field needs minimize 8 characters' };
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

    /**
     * 2. Check validate khi bấm submit, có thể có những text input empty, không đúng 
     */
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
            Object.values(errors).every((item) => !item) // đảm bảo ko còn input nào rỗng
        ) {
            // console.log('11111 >>>', Object.values(form), 11111);
            /**
             * đến đây các lỗi ko còn, cần gửi dữ liệu lên server
             * Ngay tại đây, mình cần tạo actions để dispatch action register đó đến server -> vào context tạo
             * Trong action of context -> dùng axios để tạo request
             */

            /**
             * cta cần gửi dữ liệu là form
             * và cần 1 action để thay đổi state là: authDispatch
             */
            register(form)(authDispatch)((data) => {
                navigate(LOGIN, {data});
            });
        }
    };

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error} // of global state
            loading={loading} // of global state
        />
    )
}

export default Register;