import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import HomeNavigator from "./HomeNavigator"
import { HOME_NAVIGATOR } from "../constants/routeNames";
import SideMenu from "./SideMenu";
import { GlobalContext } from '../context/Provider';

const Drawer = createDrawerNavigator();

const getDrawerContent = (navigation, authDispatch) => {
    return <SideMenu navigation={navigation} authDispatch={authDispatch}/>
}

const DrawerNavigator = () => {
    /**
     * root của logout là từ drawer
     * -> nên khai báo authDispatch từ drawer và truyền dần vào trong đến hàm gọi action logout()
     */
    const {authDispatch} = React.useContext(GlobalContext)
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={({navigation}) => getDrawerContent(navigation, authDispatch)}
        >
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;