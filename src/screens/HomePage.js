import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="tomato" translucent={true} />
            <View style={styles.subContainer}>
                <TouchableOpacity  onPress={() => navigation.openDrawer()}>
                <Icon name="menu" size={30} color={ '#000080'}/>
                </TouchableOpacity>
                <Text>foj</Text>
            </View>
        </View>
    )
}

export default HomePage;


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f1f5f9',
        paddingVertical: 30
    },
    subContainer: {
        height: '100%',
        width: '100%',
        padding: '5%',
    }
})
