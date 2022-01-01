import React from 'react'
import {
    Modal,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native'
import colors from '../../assets/theme/colors'
import Icon from './Icon'
import PropTypes from 'prop-types'

const AppModal = ({
    modalVisible, // ẩn hiện modal được component cha nó quản lý
    setModalVisible,
    title,
    modalBody,
    modalFooter,
    closeOnTouchOutside
}) => {
    return (
        <Modal
            visible={modalVisible}
            transparent
        >
            <TouchableOpacity
                onPress={() => {
                    if (closeOnTouchOutside) {
                        setModalVisible(false);
                    }
                }}
                style={styles.wrapper}
            >
                <View style={styles.modalView}>
                    <ScrollView>
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => {
                                setModalVisible(false);
                            }}>
                                <Icon size={27} type='evil' name="close" />
                            </TouchableOpacity>
                            <Text style={styles.title}>{title || 'RNContacts'}</Text>
                            <View />
                        </View>
                        <View style={styles.separator} />

                        <View style={styles.body}>
                            {modalBody}
                        </View>

                        {modalFooter}

                        {!modalFooter && (
                            <View>
                                <View style={styles.separator} />
                                <View style={styles.footerItems}>
                                    <View style={styles.footer}>
                                        <Text style={styles.footerText}>Privacy Policy</Text>
                                        <View style={styles.termsView} />
                                        <Text style={styles.footerText}>Terms of Service</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: colors.white,
        minHeight: 300,
        marginHorizontal: 20,
        borderRadius: 4,
    },
    header: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    footer: {
        justifyContent: 'space-evenly',
        paddingVertical: 7,
        alignItems: 'center',
        flexDirection: 'row',
    },
    termsView: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: colors.grey,
    },
    separator: {
        height: 0.5,
        backgroundColor: colors.grey,
    },
    footerItems: {
        width: '100%',
        padding: 10,
    },
    footerText: {
        fontSize: 12,
    },
    body: {
        minHeight: 250,
        paddingVertical: 10,
        paddingHorizontal: 20
    }
});

AppModal.propTypes = {
    closeOnTouchOutside: PropTypes.bool,
};

AppModal.defaultProps = {
    closeOnTouchOutside: true,
};

export default AppModal;
