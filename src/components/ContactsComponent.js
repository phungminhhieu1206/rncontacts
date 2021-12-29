import React from 'react'
import { View, Text } from 'react-native'
import AppModal from './common/AppModal'
import CustomButton from './common/CustomButton'

const ContactsComponent = ({ modalVisible, setModalVisible }) => {
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

            <CustomButton
                title="Open Modal"
                secondary
                onPress={() => {
                    setModalVisible(true);
                }}
            />
        </View>
    )
}

export default ContactsComponent
