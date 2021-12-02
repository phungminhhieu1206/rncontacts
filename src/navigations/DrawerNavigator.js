import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeNavigator from "./HomeNavigator"
import { HOME_NAVIGATOR } from "../constants/routeNames";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;