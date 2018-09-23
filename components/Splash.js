import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
export default class Splash extends Component {
    render() {
        let {height, width} = Dimensions.get('window');
        return (
            <View style={styles.container}>
                <Image source={require('../assets/304738182.jpg')} style={[styles.backgroundImage, {height:height, width: width}]} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }, 
    backgroundImage: {
        flex: 1,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
       }
})