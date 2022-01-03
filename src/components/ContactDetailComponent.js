import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Container from '../components/common/Container'
import colors from '../assets/theme/colors'
import ImageComponent from './common/ImageComponent';
import Icon from '../components/common/Icon'
import CustomButton from '../components/common/CustomButton'
import {CONTACT_DETAIL, CREATE_CONTACT} from '../constants/routeNames';

const ContactDetailComponent = ({
    contact
}) => {

    const { navigate } = useNavigation();

    const {
        contact_picture,
        first_name,
        last_name,
        phone_number,
        country_code
    } = contact;

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {contact_picture && <ImageComponent src={contact_picture} />}

                <View style={styles.content}>
                    <Text style={styles.names}>{first_name + ' ' + last_name}</Text>
                </View>

                <View style={styles.hrLine} />

                <View style={styles.topCallOptions}>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon
                            type="ionicon"
                            name="call-outline"
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon
                            type="materialCommunity"
                            name="message-text"
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>Text</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topCallOption}>
                        <Icon
                            type="materialCommunity"
                            name="video"
                            color={colors.primary}
                            size={27}
                        />
                        <Text style={styles.middleText}>Video</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleCallOptions}>
                    <Icon
                        type="ionicon"
                        name="call-outline"
                        color={colors.grey}
                        size={27}
                    />
                    <View style={styles.phoneMobile}>
                        <Text>{phone_number}</Text>
                        <Text>Mobile</Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Icon
                            type="materialCommunity"
                            name="video"
                            color={colors.primary}
                            size={27}
                        />
                        <Icon
                            type="materialCommunity"
                            name="message-text"
                            color={colors.primary}
                            size={27}
                            style={[styles.msgIcon]}
                        />
                    </View>
                </View>

                <CustomButton
                    style={{ alignSelf: 'flex-end', marginRight: 20, width: 200 }}
                    primary
                    title="Edit Contact"
                    onPress={() => {
                        navigate(CREATE_CONTACT, { contact, editing: true });
                    }}
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white
    },
    container: {
        flex: 1
    },
    names: {
        fontSize: 23
    },
    content: {
        padding: 20
    },
    hrLine: {
        height: 10,
        borderColor: colors.grey,
        borderBottomWidth: 0.4,
    },
    topCallOptions: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    topCallOption: {
        alignItems: 'center',
    },
    middleText: {
        fontSize: 14,
        color: colors.primary,
        paddingVertical: 5,
    },
    middleCallOptions: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    phoneMobile: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
    },
})

export default ContactDetailComponent
