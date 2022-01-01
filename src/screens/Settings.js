import React from "react";
import { View, Text } from "react-native";
import SettingComponent from '../components/SettingComponent'

const Settings = () => {

    // first: you need create settingOptions and mount it to SettingComponent
    const settingOptions = [
        {
            title: 'My Info',
            subTitle: 'Setup your profile',
            onPress: () => { }
        },
        {
            title: 'Accounts',
            subTitle: null,
            onPress: () => { }
        },
        {
            title: 'Default account for new contacts',
            subTitle: 'phunghieu1206@gmail.com',
            onPress: () => { },
        },
        {
            title: 'Contacts to display',
            subTitle: 'All contacts',
            onPress: () => { }
        },
        {
            title: 'Sort by',
            subTitle: 'First Name',
            onPress: () => {
                // setModalVisible(true);
            },
        },
        {
            title: 'Name format',
            subTitle: 'First name first',
            onPress: () => { }
        },
        {
            title: 'Import',
            subTitle: null,
            onPress: () => { }
        },
        {
            title: 'Export',
            subTitle: null,
            onPress: () => { }
        },
        {
            title: 'Blocked numbers',
            subTitle: null,
            onPress: () => { }
        },
        {
            title: 'About RNContacts',
            subTitle: null,
            onPress: () => { }
        },
    ];

    return (
        /**
         * first: mount settingOptions here
         * go to SettingComponent and create prop "settingOptions"
         * using map() to read settingOptions and render item of it to settingComponent screen
         */
        <SettingComponent
            settingOptions={settingOptions}
        />
    )
}

export default Settings;