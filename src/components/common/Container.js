import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const Container = ({ children }) => {
    return (
        <ScrollView>
            <View style={styles.wrapper}>
                {children}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20
    }
})

export default Container
