import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from "react-native"

const Login = () => {
    return (
        <View>
            <Text>Login screen</Text>
        </View>
    )
}
const SignUp = () => {
    return (
        <View>
            <Text>Sign up screen</Text>
        </View>
    )
}

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={SignUp} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;