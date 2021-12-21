import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const CustomInput = ({
    onChangeText,
    value,
    style,
    label,
    icon,
    iconPosition,
    error,
    ...props
}) => {

    const [focused, setFocused] = useState(false);

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === 'left') {
                return 'row';
            } else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    }

    const getBorderColor = () => {
        if (error) {
            return colors.danger;
        }
        if (focused) {
            return colors.primary;
        } else {
            return colors.grey;
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[
                styles.wrapper,
                { alignItems: icon ? 'center' : 'baseline' },
                { borderColor: getBorderColor(), flexDirection: getFlexDirection() }
            ]}>
                {icon && <View>{icon}</View>}
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 5
    },
    textInput: {
        flex: 1,
        width: '100%'
    },
    inputContainer: {
        paddingVertical: 12
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12
    }
})

export default CustomInput

