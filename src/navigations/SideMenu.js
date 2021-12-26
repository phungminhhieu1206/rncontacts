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
            //   logoutUser()(authDispatch);
            },
          },
        ]);
      };

    const menuItems = [
        {
            icon: <Text>T</Text>,
            name: 'Settings',
            onPress: () => {
                navigation.navigate(SETTINGS);
            }
        },
        {
            icon: <Text>T</Text>,
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
        paddingHorizontal: 40
    },
    item: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 17,
        paddingVertical: 7,
        paddingLeft: 20
    }
})

export default SideMenu
