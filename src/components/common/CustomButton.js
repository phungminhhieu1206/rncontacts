import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors';

/**
 * Xác định button:
 * Màu button thay đổi theo state button
 * Hiện icon loading khi state button loading = true
 */
const CustomButton = ({
    title,
    secondary,
    primary,
    danger,
    disabled,
    loading,
    onPress,
    style,
}) => {
    const getBgColor = () => {
        if (disabled) {
            return colors.grey;
        }
        if (primary) {
            return colors.primary;
        }
        if (danger) {
            return colors.danger;
        }
        if (secondary) {
            return colors.secondary;
        }
    };
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.wrapper, { backgroundColor: getBgColor() }, style]}
        >
            <View style={[styles.loaderSection]}>
                {loading && (
                    <ActivityIndicator
                        color={primary ? colors.secondary : colors.primary}
                    />
                )}
                {title && (
                    <Text
                        style={{
                            color: disabled ? 'black' : colors.white,
                            paddingLeft: loading ? 5 : 0,
                        }}>
                        {loading ? 'Please wait...' : title}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 42,
        paddingHorizontal: 5,
        marginVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    loaderSection: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 1,
        width: '100%',
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12,
    },
})
export default CustomButton
