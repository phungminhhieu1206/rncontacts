import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    Image,
    StyleSheet
} from 'react-native'
import colors from '../assets/theme/colors'
import { CONTACT_DETAIL, CREATE_CONTACT } from '../constants/routeNames'
import AppModal from './common/AppModal'
import CustomButton from './common/CustomButton'
import Icon from './common/Icon'
import Message from './common/Message'

const ContactsComponent = ({
    modalVisible,
    setModalVisible,
    data,
    loading,
    sortBy
}) => {

    const { navigate } = useNavigation();

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
        // console.log('item --> ', item);

        const {
            contact_picture,
            first_name,
            last_name,
            phone_number,
            country_code
        } = item;



        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => {
                /**
                 * Muốn click item chuyển đến màn detail
                 * trường hợp này, navigate kèm data
                 * Tại màn detail lấy ra params truyền đến !
                 */
                navigate(CONTACT_DETAIL, {item});
            }}>
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
        <>
            <View style={{ backgroundColor: colors.white, flex: 1 }}>
                {loading &&
                    <View style={{ padding: 100 }}>
                        <ActivityIndicator color={colors.primary} size="large" />
                    </View>
                }

                {!loading &&
                    <View style={{ paddingVertical: 20 }}>
                        <FlatList
                            data={
                                sortBy
                                    ? data.sort((a, b) => {
                                        if (sortBy === 'First Name') {
                                            if (b.first_name > a.first_name) {
                                                return -1;
                                            } else {
                                                return 1;
                                            }
                                        }
                                        if (sortBy === 'Last Name') {
                                            if (b.last_name > a.last_name) {
                                                return -1;
                                            } else {
                                                return 1;
                                            }
                                        }
                                    })
                                    : data
                            }
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
            </View>

            <TouchableOpacity
                style={styles.floatingActionButton}
                onPress={() => {
                    navigate(CREATE_CONTACT)
                }}
            >
                <Icon name="plus" color={colors.white} size={21} />
            </TouchableOpacity>
        </>
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
    },
    floatingActionButton: {
        backgroundColor: 'red',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 35,
        right: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ContactsComponent
