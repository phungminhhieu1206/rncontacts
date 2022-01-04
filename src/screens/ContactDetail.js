import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../assets/theme/colors";
import Icon from "../components/common/Icon";
import ContactDetailComponent from "../components/ContactDetailComponent";

const ContactDetail = () => {

    // Lấy params truyền đến màn này
    const { params: { item } } = useRoute();
    // console.log('params --->', item);

    const { setOptions } = useNavigation();

    useEffect(() => {
        if (item) {
            setOptions({
                // title: item.first_name + ' ' + item.last_name,
                headerStyle: {
                    backgroundColor: 'yellow'
                },
                headerTintColor:'red', // back button và title (nếu có)
                headerTitle: () => {
                    return (
                        <View>
                            <Text>{item.first_name + ' ' + item.last_name}</Text>
                        </View>
                    )
                },
                headerRight: () => {
                    return (
                        <View style={{
                            flexDirection: 'row',
                            paddingRight: 10,
                        }}
                        >
                            <TouchableOpacity>
                                <Icon
                                    size={21}
                                    name={item.is_favorite ? "star" : "star-border"}
                                    type="material"
                                    color={colors.grey}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ paddingLeft: 10 }}>
                                <Icon
                                    size={21}
                                    name="delete"
                                    type="material"
                                    color={colors.grey}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                }
            });
        }
    }, [item]);

    return (
        <ContactDetailComponent contact={item} />
    )
}

export default ContactDetail;