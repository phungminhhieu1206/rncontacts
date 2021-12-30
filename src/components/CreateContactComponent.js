import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import colors from '../assets/theme/colors'
import Container from './common/Container'
import CustomButton from './common/CustomButton'
import CustomInput from './common/CustomInput'
import CountryPicker from 'react-native-country-picker-modal';
import { DEFAULT_IMAGE_URI } from '../constants/general'

const CreateContactComponent = () => {
    return (
        <View style={styles.container}>
            <Container>

                <Image
                    source={{ uri: DEFAULT_IMAGE_URI }}
                    style={styles.imageView}
                />
                <Text style={styles.chooseText}>Choose Image</Text>
                <CustomInput
                    label="First Name"
                    placeholder="Enter first name"
                />
                <CustomInput
                    label="Last Name"
                    placeholder="Enter last name"
                />
                <CustomInput
                    icon={
                        <CountryPicker
                            withFilter
                            withFlag
                            withCountryNameButton={false}
                            withCallingCode
                            withEmoji
                            onSelect={() => { }}
                        />
                    }
                    iconPosition="left"
                    style={{ paddingLeft: 10 }}
                    label="Phone Number"
                    placeholder="Enter phone number"
                />

                <CustomButton primary title="Submit" />
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageView: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center'
    },
    chooseText: {
        color: colors.primary,
        textAlign: 'center'
    }
})

export default CreateContactComponent
