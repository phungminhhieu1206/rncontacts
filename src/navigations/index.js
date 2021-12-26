import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import { GlobalContext } from "../context/Provider";

const AppNavContainer = () => {

    const {
        authState: {isLoggedIn},
    } = useContext(GlobalContext); // in the first set up, isLoggedIn = true

    // console.log("isLoggedIn >> ", isLoggedIn);
    // console.log("loading >> ", loading);
    

    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

// screens>>>Home>>>Drawer
// screens>>>Auth>>>

export default AppNavContainer;