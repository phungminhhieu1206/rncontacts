import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from "../constants/routeNames"
import Contacts from '../screens/Contacts'
import ContactDetail from '../screens/ContactDetail'
import CreateContact from '../screens/CreateContact'
import Settings from '../screens/Settings'

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
            <HomeStack.Screen name={SETTINGS} component={Settings} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;