import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Icon } from 'react-native-elements'



const Login = ({ navigation }) => {

    const [hidePass, setHidePass] = useState(true);


    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="tomato" translucent={true} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.subContainer}>
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={require('../assets/logo.jpg')}>
                        </Image>
                    </View>
                    <View style={styles.title}>
                        <Text style={{ textAlign: 'center', fontSize: 24, color: '#fff', fontWeight: 'normal' }}>Welcome To Yuva arts & sports club</Text>
                    </View>

                    <View style={{ width: '100%', marginLeft: 10, marginBottom: 5, }}>
                        <Text style={{ color: 'tomato', fontWeight: 'bold', fontSize: 24, }}>Login </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Icon name={"account"} size={22}  />
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
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 100, marginVertical: 30 }}>
                    <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ color: 'white' }}>Don't have an</Text>
                        <Text style={{ color: 'tomato' }}>  account ?</Text>
                        <Text style={{ color: 'white' }}>  Sign Up</Text>
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
        marginVertical: 60,
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
        marginVertical: 20
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

export default Login