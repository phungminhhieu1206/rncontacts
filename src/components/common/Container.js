import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

/**
 * Vì không biết trước thành phần con của nó là gì, nên sử dụng thành phần children
 * Cho phép truyền trực tiếp các phần tử con của chúng bằng cách "lồng JSX"
 */
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
