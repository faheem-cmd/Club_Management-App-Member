import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Ask = () => {

    const [icon, setIcon] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)

    const handle = () => {
        setModalVisible(true)
        setIcon(false)
    }

    const handleClose =() => {
        setModalVisible(!modalVisible)
        setIcon(true)
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.back}>
                        <FontAwesome5 name="arrow-left" size={28} color="tomato" />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="user" size={24} color="#002" />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', marginLeft: 20 }}>Ask Your Club Member</Text>
                    </View>
                </View>
                <View style={styles.memeber}>
                    <View style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={{ height: null, width: null, flex: 1, borderRadius: 10 }} source={{ uri: 'https://pbs.twimg.com/profile_images/1439604604656922629/qA86uljZ_400x400.jpg' }}></Image>
                        </View>
                        <View style={{ width: '100%', paddingLeft: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Abdul kadher.P</Text>
                            <Text style={{ fontSize: 12 }}>Yuva Club Member | 28,Pathiriyal</Text>
                        </View>

                    </View>
                    <View style={{ ...styles.card, height: 90, alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 12 }}>പരിമാനാം ചതുത നാമാവിശികു ചുാേരും പിെല
                            എാലി കൃേബര പസര പിോെണ എപകെട
                            വിസിെക. പലനം ഫാവു ഹുംബനാ ചുപരണ സതാ
                            കഥിെനതിഅംബുസക നു ൂോരം</Text>
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={() => handle()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Choose your Subject</Text>
                            {icon === true ?
                                <FontAwesome5 name="chevron-circle-down" size={24} color="#002" /> :
                                <FontAwesome5 name="chevron-circle-up" size={24} color="#002" />
                            }
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: 100 }}>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={{ padding: 20 }}>
                                <View style={{ ...styles.card, marginVertical: 332, height: 130 }}>
                                    <TouchableOpacity style={{ backgroundColor: '#F1F5F9', width: 20, borderRadius: 100, alignItems: 'center', elevation: 1, marginLeft: 280 }}
                                        onPress={() => handleClose()}>
                                        <Icons name={"close"} size={19} color={'#FD6244'} />
                                    </TouchableOpacity>

                                </View></View>
                        </Modal>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Ask


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
    },
    subContainer: {
        marginVertical: 40,
        padding: '3%'
    },
    back: {
        width: 50,
        height: 30,
        alignItems: 'center',
    },
    memeber: {
        padding: '3%',
        marginVertical: 30
    },
    card: {
        width: '100%',
        height: 70,
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        elevation: 3,
        padding: '3%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    imageContainer: {
        height: 50,
        width: 50,
        justifyContent: 'center'
    },
    button: {
        padding: 16,
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        elevation: 3,
    },
})