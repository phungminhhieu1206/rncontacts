import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Switch,
    TouchableOpacity
} from 'react-native'
import colors from '../assets/theme/colors'
import Container from './common/Container'
import CustomButton from './common/CustomButton'
import CustomInput from './common/CustomInput'
import CountryPicker from 'react-native-country-picker-modal';
import { DEFAULT_IMAGE_URI } from '../constants/general'
import ImagePicker from './common/ImagePicker'

const CreateContactComponent = ({
    form,
    onChangeText,
    onSubmit,
    setForm,
    loading,
    error,
    toggleValueChange,
    sheetRef,
    openSheet,
    closeSheet,
    onFileSelected,
    localFile
}) => {

    // console.log('error aaaaaaa: ---->', error);
    // console.log('local file image ---> ', localFile);

    return (
        <View style={styles.container}>
            <Container>

                <Image
                    source={{ uri: localFile?.path || DEFAULT_IMAGE_URI }}
                    style={styles.imageView}
                />

                <TouchableOpacity onPress={openSheet}>
                    <Text style={styles.chooseText}>Choose Image</Text>
                </TouchableOpacity>


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
                                // console.log('value country ---> ', value);
                                // console.log('aaaaaa ---', phoneCode, cCode);


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

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                    }}>
                    <Text style={{ fontSize: 17 }}>Add to favorites</Text>

                    <Switch
                        trackColor={{ false: colors.grey, true: colors.primary }}
                        thumbColor="#FFFFFF"
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleValueChange}
                        value={form.isFavorite}
                    />
                </View>

                <CustomButton
                    primary
                    title="Submit"
                    onPress={onSubmit}
                    loading={loading}
                    disabled={loading}
                />
            </Container>

            <ImagePicker onFileSelected={onFileSelected} ref={sheetRef} />
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
