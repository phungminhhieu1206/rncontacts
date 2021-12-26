import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Container from "../components/common/Container";

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
                    <Text style={{ padding: 10 }}>NAV</Text>
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