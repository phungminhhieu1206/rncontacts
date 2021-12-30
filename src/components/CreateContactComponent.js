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

const CreateContactComponent = ({
    form,
    onChangeText,
    onSubmit,
    setForm,
    loading,
    error
}) => {

    // console.log('error aaaaaaa: ---->', error);

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
                    onChangeText={(value) => {
                        onChangeText({ name: 'firstName', value: value })
                    }}
                    error={error?.first_name?.[0]}
                />
                <CustomInput
                    label="Last Name"
                    placeholder="Enter last name"
                    onChangeText={(value) => {
                        onChangeText({ name: 'lastName', value: value })
                    }}
                    error={error?.last_name?.[0]}
                />
                <CustomInput
                    icon={
                        <CountryPicker
                            withFilter
                            withFlag
                            countryCode={form.countryCode || undefined}
                            withCountryNameButton={false}
                            withCallingCode
                            withCallingCodeButton
                            withEmoji
                            onSelect={(value) => {
                                const phoneCode = value.callingCode[0];
                                const cCode = value.cca2;
                                console.log('value country ---> ', value);
                                console.log('aaaaaa ---', phoneCode, cCode);


                                setForm({
                                    ...form,
                                    'phoneCode': phoneCode,
                                    'countryCode': cCode
                                })
                            }}
                        />
                    }
                    iconPosition="left"
                    style={{ paddingLeft: 10 }}
                    label="Phone Number"
                    placeholder="Enter phone number"
                    onChangeText={(value) => {
                        onChangeText({ name: 'phoneNumber', value: value })
                    }}
                    error={error?.phone_number?.[0]}
                />

                <CustomButton
                    primary
                    title="Submit"
                    onPress={onSubmit}
                    loading={loading}
                    disabled={loading}
                />
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
