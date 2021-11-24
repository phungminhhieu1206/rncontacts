import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeNavigator from "./HomeNavigator"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;