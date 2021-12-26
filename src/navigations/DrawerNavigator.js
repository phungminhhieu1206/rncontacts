import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeNavigator from "./HomeNavigator"
import { HOME_NAVIGATOR } from "../constants/routeNames";
import SideMenu from "./SideMenu";

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation) => {
    return <SideMenu navigation={navigation}/>
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={({navigation}) => getDrawerContent(navigation)}
        >
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;