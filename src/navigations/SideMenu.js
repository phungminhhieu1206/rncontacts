import React from 'react'
import {
    Alert,
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/common/Container'
import { SETTINGS } from '../constants/routeNames'
import logout from '../context/actions/auth/logout'
import Icon from "react-native-vector-icons/Fontisto"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import colors from "../assets/theme/colors"

const SideMenu = ({ navigation, authDispatch }) => {
    const handleLogout = () => {
        navigation.toggleDrawer(); // hidden drawer layer when alert popup
        Alert.alert('Logout!', 'Are you sure you want to logout?', [
          {
            text: 'Cancel',
            onPress: () => {},
          },
    
          {
            text: 'OK',
            onPress: () => {
                // logout, xóa asynstorage
              logout()(authDispatch);
              console.log("LOGOUT SUCCESSFULL !");
            },
          },
        ]);
      };

    const menuItems = [
        {
            icon: <Icon size={20} name='player-settings'></Icon>,
            name: 'Settings',
            onPress: () => {
                navigation.navigate(SETTINGS);
            }
        },
        {
            icon: <MaterialIcon size={21} name="logout"/>,
            name: 'Logout',
            onPress: handleLogout
        },
    ]

    return (
        <SafeAreaView>
            <Container>
                <Image
                    height={70}
                    width={70}
                    source={require('../assets/images/logo.png')}
                    style={styles.logoImage}
                />

                <View style={styles.itemContainer}>
                    {menuItems.map(({ name, icon, onPress }) => (
                        <TouchableOpacity
                            key={name}
                            style={styles.item}
                            onPress={onPress}
                        >
                            {icon}
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
        borderWidth: 1,

    },
    itemContainer: {
        paddingHorizontal: 60
    },
    item: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 17,
        paddingVertical: 7,
        paddingLeft: 20,
        color: colors.text
    }
})

export default SideMenu
