import React, { useContext, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import { GlobalContext } from "../context/Provider";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
import { ActivityIndicator } from 'react-native'


const AppNavContainer = () => {

    const {
        authState: { isLoggedIn },
    } = useContext(GlobalContext); // in the first set up, isLoggedIn = true

    const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            console.log('user islogin true ----> ', user);
            if (user) {
                setAuthLoaded(true);
                setIsAuthenticated(true);
            } else {
                setAuthLoaded(true);
                setIsAuthenticated(false);
            }
        } catch (error) { }
    };

    useEffect(() => {
        getUser();
    }, [isLoggedIn]);

    return (
        <>
            {authLoaded ? (
                <NavigationContainer>
                    {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            ) : (
                <ActivityIndicator />
            )}
        </>
    );
};

// screens>>>Home>>>Drawer
// screens>>>Auth>>>

export default AppNavContainer;