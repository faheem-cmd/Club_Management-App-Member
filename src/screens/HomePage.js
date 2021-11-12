import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from "react-native-custom-dropdown";

const HomePage = ({ navigation }) => {

    const [country, setCountry] = useState('');
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="tomato" translucent={true} />
            <View style={styles.subContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon name="menu" size={30} color={'#000080'} />
                </TouchableOpacity>
                <Text>foj</Text>
                <View style={{paddingHorizontal: 70}}>
                <DropDownPicker
                    items={[
                        { label: 'uk', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                        { label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                    ]}
                    defaultValue={country}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: 'orange',elevation:4 }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => setCountry(item.value)}
                    labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#000'
                    }}
                    selectedtLabelStyle={{
                        color: '#39739d'
                    }}
                    activeLabelStyle={{color: 'red'}}
                    
                />
                </View>
                <Text>{country}</Text>
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
