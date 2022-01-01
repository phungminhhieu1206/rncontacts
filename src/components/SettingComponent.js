import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import colors from '../assets/theme/colors'

const SettingComponent = ({
    settingOptions
}) => {
    return (
        <>
            <ScrollView style={{ backgroundColor: colors.white }}>
                {settingOptions.map(({ title, subTitle, onPress }, index) => (
                    <TouchableOpacity key={title} onPress={onPress}>
                        <View
                            style={{
                                paddingHorizontal: 20,
                                paddingBottom: 20,
                                paddingTop: 20,
                            }}
                        >
                            <Text style={{ fontSize: 17 }}>{title}</Text>
                            {subTitle && (
                                <Text
                                    style={{
                                        fontSize: 14,
                                        opacity: 0.5,
                                        paddingTop: 5
                                    }}
                                >
                                    {subTitle}
                                </Text>
                            )}
                        </View>

                        <View
                            style={{
                                height: 0.5,
                                backgroundColor: colors.grey
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({

})

export default SettingComponent
