import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const Signup = ({ navigation}) => {

    const [hidePass, setHidePass] = useState(true);


    return (
        <View style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} >
                <TouchableOpacity style={{ paddingLeft: '3%',paddingTop:'4%',width: 70,marginVertical:25}} onPress={() => navigation.navigate('Login')}>
                    <Icon name={"arrow-left-bold"} size={32} color={'tomato'} />
                </TouchableOpacity>
                <View style={styles.subContainer}>
                    <View style={{ alignItems: 'center', marginBottom: 3}}>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source={require('../assets/logo.jpg')}>
                            </Image>
                        </View>
                        <View style={styles.title}>
                            <Text style={{ textAlign: 'center', fontSize: 24, color: '#fff', fontWeight: 'normal' }}>Welcome To Yuva arts & sports club</Text>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginLeft: 10, marginBottom: 5, }}>
                        <Text style={{ color: 'tomato', fontWeight: 'bold', fontSize: 24, }}>Register </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Icon name={"email"} size={22} color={'grey'} />
                        <TextInput placeholder='Email' style={styles.search}>
                        </TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <Icon name={"account"} size={22} color={'grey'} />
                        <TextInput placeholder='Username' style={styles.search}>
                        </TextInput>
                    </View>
                    <View style={styles.textContainer}>
                        <Icon name={"lock"} size={22} color={'grey'} />
                        <TextInput placeholder='Password' style={styles.search}
                            maxLength={6}
                            secureTextEntry={hidePass ? true : false}>
                        </TextInput>
                        <Icon name={hidePass ? 'eye-off' : 'eye'} size={22} color={'tomato'}
                            onPress={() => setHidePass(!hidePass)} />
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: '20%', }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 100, marginVertical: '8%' }}>
                    <TouchableOpacity style={styles.register}>
                        <Text style={{ color: 'white' }}>Already have an</Text>
                        <Text style={{ color: 'tomato' }}>  account ?</Text>
                        <Text style={{ color: 'white' }}> Sign in</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#003',
        justifyContent: 'center'
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
    },
    imageView: {
        height: 130,
        width: 130,
    },
    image: {
        height: null,
        width: null,
        flex: 1,
        borderRadius: 100,
        resizeMode: 'cover'
    },
    title: {
        width: 300,
        marginVertical: 10
    },
    search: {
        padding: 0,
        marginLeft: 5,
        marginRight: 5,
        width: '90%',
    },
    textContainer: {
        padding: 15,
        backgroundColor: '#f1f5f9',
        width: '100%',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        paddingRight: '10%',

    },
    button: {
        padding: 16,
        backgroundColor: 'tomato',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    register: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    }

})

export default Signup