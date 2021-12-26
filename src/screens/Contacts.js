import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../components/common/Container";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

const Contacts = () => {
    const { setOptions, toggleDrawer } = useNavigation();

    React.useEffect(() => {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => {
                        toggleDrawer();
                    }}
                >
                    <MaterialIcon style={{padding: 10}} size={25} name="menu"/>
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <Container>
            <Text>Contact screen</Text>
        </Container>
    )
}

export default Contacts;