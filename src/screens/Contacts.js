import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../components/common/Container";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Icon from "../components/common/Icon"
import ContactsComponent from "../components/ContactsComponent";
import { GlobalContext } from "../context/Provider";
import getContacts from "../context/actions/contacts/getContacts";
import { CREATE_CONTACT } from '../constants/routeNames';

const Contacts = () => {
    /**
     * Tại màn hình nào muốn setOption cho header, thì:
     * set thuộc tính setOptions = useNavigation(),
     * bên dưới set useEffect()
     */
    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(null);

    const {
        contactDispatch,
        contactState: {
            getContacts: { data, loading }
        }
    } = useContext(GlobalContext);

    // console.log('contact data --> ', data);
    // console.log('loading --> ', loading);

    React.useEffect(() => {
        getContacts()(contactDispatch);
    }, []);

    const getSettings = async () => {
        const sortPref = await AsyncStorage.getItem('sortBy');
        if (sortPref) {
            setSortBy(sortPref);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getSettings();
            return () => { };
        }, []),
    );

    /**
     * Set useEffect cho option header
     */
    React.useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        toggleDrawer();
                    }}
                >
                    <Icon type="material" style={{ padding: 10 }} size={25} name='menu'></Icon>
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        /**
         * return list contact here
         * so you need create contact list component 
        */
        <ContactsComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            loading={loading}
            sortBy={sortBy}
        />
    )
}

export default Contacts;