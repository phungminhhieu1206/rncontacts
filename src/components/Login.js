import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../assets/theme/colors';
import Container from '../components/common/Container';
import CustomButton from '../components/common/CustomButton';
import CustomInput from './common/CustomInput';
import { REGISTER } from '../constants/routeNames';

const LoginComponent = ({
    error,
    form,
    justSignedUp,
    onChange,
    loading,
    onSubmit,
}) => {
    const { navigate } = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);
    return (
        <Container>
            <Image
                height={70}
                width={70}
                source={require('../assets/images/logo.png')} // image local
                style={styles.logoImage}
            />

            <View>
                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Please login here</Text>

                <View style={styles.form}>
                    <CustomInput
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                    />

                    <CustomInput
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        icon={
                            <TouchableOpacity
                                onPress={() => {
                                    setIsSecureEntry((prev) => !prev);
                                }}>
                                <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
                            </TouchableOpacity>
                        }
                        iconPosition="right"
                    />

                    <CustomButton
                        disabled={loading}
                        onPress={onSubmit}
                        loading={loading}
                        primary
                        title="Submit"
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(REGISTER);
                            }}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        marginTop: 50,
        alignSelf: 'center',
    },

    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500',
    },

    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '500',
    },

    form: {
        paddingTop: 10,
    },

    createSection: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 16,
    },

    infoText: {
        fontSize: 17,
    },
})

export default LoginComponent;