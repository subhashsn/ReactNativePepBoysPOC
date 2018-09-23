import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab'
import MenuList from '../Common/AlbumList/MenuList.js'


class CarService extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        selectedIndex: 0,
        selectedIndices: [0],
        customStyleIndex: 0,
        locations: [
          {'header': 'PopBoys IndianBoys', 'id': 1, 'img':require('../../assets/bmw_car.jpg'),'address': '4500 Lafayette Rd Indianapolis, IN46254','slot':'9:30 PM - 10:30 PM','review':'105 Reviews','status':'Closed Now'},
          {'header': 'PopBoys1 IndianBoys', 'id': 2, 'img':require('../../assets/bmw_car.jpg'),'address': '4500 Lafayette Rd Indianapolis, IN46254','slot':'7:30 AM - 8:30 AM','review':'105 Reviews','status':'Open Now'}
        ]
    }
  }

  handleCustomIndexSelect = (index) => {
      this.setState({
          ...this.state,
          customStyleIndex: index,
      });
  }

  renderLocation(){
    return this.state.locations.map(locations => 
        <MenuList key={locations.id} locations={locations}></MenuList>
    )
  }

  render() {
    return (
      <View >
        <View>
          <View>
            <Image
              source = {require('../../assets/logo.png')}
              style={{ width: "100%", height: 215, marginLeft: 0,resizeMode: "cover"}}
            />
          </View>
        </View>

        {/* Forming Segment <SegmentScreen style={{ top: -15}}/> */}
        <SegmentedControlTab
            values={['Vechicle', 'Service','Date & Time','Contact Info']}
            selectedIndex={this.state.customStyleIndex}
            onTabPress={this.handleCustomIndexSelect}
            borderRadius={0}
            tabsContainerStyle={{ height: 50, backgroundColor: '#F2F2F2' }}
            tabStyle={{ backgroundColor: '#F2F2F2', borderWidth: 0, borderColor: 'transparent' }}
            activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
            tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
            activeTabTextStyle={{ color: '#888888' }} />
        {this.state.customStyleIndex === 0 &&
            <View> 
              <ScrollView>
                {this.renderLocation()}
              </ScrollView>
            </View>}
        {this.state.customStyleIndex === 1 &&
            <Text style={styles.tabContent} > Service Details</Text>}
        {this.state.customStyleIndex === 2 &&
            <Text style={styles.tabContent} > Date & Time</Text>}
        {this.state.customStyleIndex === 3 &&
            <Text style={styles.tabContent} > Contact Info</Text>}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  tabViewText: {
      color: '#444444',
      fontWeight: 'bold',
      marginTop: 50,
      fontSize: 18
  },
  titleText: {
      color: '#444444',
      padding: 20,
      fontSize: 14,
      fontWeight: '500'
  },
  headerText: {
      padding: 8,
      fontSize: 14,
      color: '#444444'
  },
  tabContent: {
      color: '#444444',
      fontSize: 18,
      margin: 24
  },
  Seperator: {
      marginHorizontal: -10,
      alignSelf: 'stretch',
      borderTopWidth: 1,
      borderTopColor: '#888888',
      marginTop: 24
  },
  tabStyle: {
      borderColor: '#D52C43',
      height:40
  },
  activeTabStyle: {
      backgroundColor: '#D52C43'
  },
  tabTextStyle: {
      color: '#D52C43'
  }
});
export default CarService;