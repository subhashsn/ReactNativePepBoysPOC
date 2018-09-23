import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class First extends Component {
  static navigationOptions = {
    tabBarLabel: 'TopBrands'
  };
  render() {
    return (
      <View>
        <Text>
          Top Brands
        </Text>
      </View>
    );
  }
}

