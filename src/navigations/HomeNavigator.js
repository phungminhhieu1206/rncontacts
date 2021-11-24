import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from "react-native"

const Contacts = () => {
    return (
        <View>
            <Text>Contact screen</Text>
        </View>
    )
}
const ContactDetail = () => {
    return (
        <View>
            <Text>Contact detail screen</Text>
        </View>
    )
}
const CreateContact = () => {
    return (
        <View>
            <Text>Create contact screen</Text>
        </View>
    )
}
const Settings = () => {
    return (
        <View>
            <Text>Settings screen</Text>
        </View>
    )
}

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name="Contacts" component={Contacts} />
            <HomeStack.Screen name="Contact Detail" component={ContactDetail} />
            <HomeStack.Screen name="Create Contact" component={CreateContact} />
            <HomeStack.Screen name="Settings" component={Settings} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;