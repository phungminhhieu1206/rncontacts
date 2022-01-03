import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import colors from '../../assets/theme/colors';

const Message = ({
    message,
    onDismiss,
    retry,
    retryFn,
    primary,
    danger,
    info,
    success,
}) => {
    const [userDismissed, setDismissed] = React.useState(false);

    const getBgColor = () => {
        if (primary) {
            return colors.primary;
        }
        if (danger) {
            return colors.danger;
        }
        if (success) {
            return colors.success;
        }
        if (info) {
            return colors.secondary;
        }
    };
    return (
        <>
            {userDismissed ? null : (
                <TouchableOpacity
                    style={[styles.wrapper, { backgroundColor: getBgColor() }]}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: colors.white,
                            }}>
                            {message}
                        </Text>

                        {retry && typeof onDismiss !== 'function' && (
                            <TouchableOpacity onPress={retryFn}>
                                <Text
                                    style={{
                                        color: colors.white,
                                    }}>
                                    Retry
                                </Text>
                            </TouchableOpacity>
                        )}

                        {typeof onDismiss === 'function' && (
                            <TouchableOpacity
                                onPress={() => {
                                    setDismissed(true);
                                    onDismiss();
                                }}>
                                <Text
                                    style={{
                                        color: colors.white,
                                    }}>
                                    X
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </TouchableOpacity>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 42,

        paddingHorizontal: 5,

        paddingVertical: 13,

        marginVertical: 5,
        borderRadius: 4,
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
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

export default Message;