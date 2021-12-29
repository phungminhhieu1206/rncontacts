import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../components/common/Container";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Icon from "../components/common/Icon"
import ContactsComponent from "../components/ContactsComponent";

const Contacts = () => {
    const { setOptions, toggleDrawer } = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

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
        />
    )
}

export default Contacts;