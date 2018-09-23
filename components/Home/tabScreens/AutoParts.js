import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
// import ListView from '../components/listView/listView.js'

export default class First extends Component {
  static navigationOptions = {
    tabBarLabel: 'AutoParts',
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../../assets/app/home.png')}
    //     style={[styles.icon]}
    //   />
    // ),
  };
  render() {
    return (
      <View>
        <Text>
          Top Brands
        </Text>
      </View>
      // <ListView />
    );
  }
}

