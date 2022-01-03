import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import ContactDetailComponent from "../components/ContactDetailComponent";

const ContactDetail = () => {

    // Lấy params truyền đến màn này
    const { params: { item } } = useRoute();
    console.log('params --->', item);
    return (
        <ContactDetailComponent contact={item} />
    )
}

export default ContactDetail;