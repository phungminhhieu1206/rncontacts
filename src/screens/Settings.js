import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SettingComponent from '../components/SettingComponent'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {

    // using get email user from AsyncStorage
    const [email, setEmail] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = React.useState(null);

    const saveSetting = (key, value) => {
        AsyncStorage.setItem(key, value);
    };

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
            subTitle: email,
            onPress: () => { },
        },
        {
            title: 'Contacts to display',
            subTitle: 'All contacts',
            onPress: () => { }
        },
        {
            title: 'Sort by',
            subTitle: sortBy,
            onPress: () => {
                setModalVisible(true);
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

    const prefArr = [
        {
            name: 'First Name',
            selected: sortBy === 'First Name',

            onPress: () => {
                saveSetting('sortBy', 'First Name');
                setSortBy('First Name');
                setModalVisible(false);
            },
        },
        {
            name: 'Last Name',
            selected: sortBy === 'Last Name',
            onPress: () => {
                saveSetting('sortBy', 'Last Name');
                setSortBy('Last Name');
                setModalVisible(false);
            },
        },
    ];

    const getSettings = async () => {
        // get email user from asyncStorage
        const user = await AsyncStorage.getItem('user');
        setEmail(JSON.parse(user).email);

        const sortPref = await AsyncStorage.getItem('sortBy');
        if (sortPref) {
            setSortBy(sortPref);
        }

    };

    useEffect(() => {
        getSettings();
    }, []);

    return (
        /**
         * first: mount settingOptions here
         * go to SettingComponent and create prop "settingOptions"
         * using map() to read settingOptions and render item of it to settingComponent screen
         */
        <SettingComponent
            settingOptions={settingOptions}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            prefArr={prefArr}
        />
    )
}

export default Settings;