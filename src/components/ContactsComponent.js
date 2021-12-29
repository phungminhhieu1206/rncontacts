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
            phone_number
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
                        <View style={{
                            width: 45,
                            height: 45,
                            backgroundColor: colors.grey,
                            borderRadius: 25
                        }}>

                        </View>
                    }

                    <View style={{ flexDirection: 'row' }}>
                        <Text>{first_name}</Text>
                        <Text> {last_name}</Text>
                    </View>

                    <Text>{phone_number}</Text>
                </View>

                <Icon name="right" type="ant" />
            </TouchableOpacity>
        )
    }

    return (
        <View>
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
                <View style={{paddingVertical: 20}}>
                    <FlatList
                        data={data}
                        ListEmptyComponent={ListEmptyComponent}
                        ListFooterComponent={<View style={{height: 100}}></View>}
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item.id)}
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
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20
    }
})

export default ContactsComponent
