import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../assets/theme/colors';
import Container from './common/Container';
import CustomButton from './common/CustomButton';
import Input from './common/Input';
import { LOGIN } from '../constants/routeNames';
// import Message from '../common/Message';
// import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  error,
  errors,
}) => {
  const { navigate } = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
          />

          <Input
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
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
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
    alignSelf: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
  },
  form: {
    paddingTop: 20,
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

export default RegisterComponent;