import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import colors from '../assets/theme/colors'
import AppModal from '../components/common/AppModal'
import Icon from './common/Icon'

const SettingComponent = ({
    settingOptions,
    setModalVisible,
    modalVisible,
    prefArr
}) => {
    return (
        <>
            <AppModal
                modalVisible={modalVisible}
                modalFooter={<></>}
                closeOnTouchOutside={false}
                modalBody={
                    <View>
                        {prefArr.map(({ name, selected, onPress }) => (
                            <View key={name}>
                                <TouchableOpacity
                                    onPress={onPress}
                                    style={{
                                        flexDirection: 'row',
                                        paddingVertical: 5,
                                        alignItems: 'center',
                                    }}
                                >
                                    {selected && <Icon size={17} name="check" type="material" />}
                                    <Text
                                        style={{
                                            fontSize: 17,
                                            paddingLeft: selected ? 15 : 30
                                        }}
                                    >
                                        {name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                }
                title="Sort by"
                setModalVisible={setModalVisible}
            />
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
