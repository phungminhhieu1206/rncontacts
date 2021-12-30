import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image, StyleSheet } from 'react-native'
import colors from '../assets/theme/colors'
import AppModal from './common/AppModal'
import CustomButton from './common/CustomButton'
import Icon from './common/Icon'
import Message from './common/Message'

const ContactsComponent = ({
    modalVisible,
    setModalVisible,
    data,
    loading
}) => {


    const ListEmptyComponent = () => {
        return (
            <View style={{
                padding: 100
            }}>
                <Message info message="No contacts to show here !!!" />
            </View>
        )
    }

    const renderItem = ({ item }) => {
        console.log('item --> ', item);

        const {
            contact_picture,
            first_name,
            last_name,
            phone_number,
            country_code
        } = item;



        return (
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.item}>
                    {contact_picture ?
                        <Image
                            style={{
                                width: 45,
                                height: 45,
                                borderRadius: 25
                            }}
                            source={{ uri: contact_picture }}
                        /> :
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                backgroundColor: colors.grey,
                                borderRadius: 25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}
                        >
                            <Text style={[styles.name, { color: colors.white }]}>{first_name[0]}</Text>
                            <Text style={[styles.name, { color: colors.white }]}>{last_name[0]}</Text>
                        </View>
                    }


                    <View style={{ paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>{first_name}</Text>
                            <Text style={styles.name}> {last_name}</Text>
                        </View>
                        <Text
                            style={styles.phoneNumber}
                        >{`(${country_code}) ${phone_number}`}</Text>
                    </View>
                </View>

                <Icon name="right" type="ant" size={18} color={colors.grey} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <AppModal
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                modalBody={<View>
                    <Text>Say hello everyone</Text>
                </View>}
                modalFooter={<></>}
                title="My Profile"
            />

            {loading &&
                <View style={{ padding: 100 }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>
            }

            {!loading &&
                <View style={{ paddingVertical: 20 }}>
                    <FlatList
                        data={data}
                        ListEmptyComponent={ListEmptyComponent}
                        ListFooterComponent={<View style={{ height: 100 }}></View>}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
                        ItemSeparatorComponent={() => (
                            <View style={{
                                height: 0.5,
                                backgroundColor: colors.grey
                            }}></View>
                        )}
                    />
                </View>
            }

            {/* <CustomButton
                title="Open Modal"
                secondary
                onPress={() => {
                    setModalVisible(true);
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        alignItems: 'center'
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    name: {
        fontSize: 17
    },
    phoneNumber: {
        opacity: 0.7,
        fontSize: 14,
        paddingVertical: 5,
    }
})

export default ContactsComponent
