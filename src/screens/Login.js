import React from "react";
import LoginComponent from "../components/Login";


const Login = () => {

    const [value, onChangeText] = React.useState('');

    const onSubmit = () => {
        console.log("you click login button !");
    }

    return (
        <LoginComponent
            onSubmit={onSubmit}
        />
    )
}

export default Login;