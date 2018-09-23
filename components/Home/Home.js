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


class Home extends Component {
  static navigationOptions = {
    headerStyle:{
      display:'none',
    },
  };

  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
      names: [
        {'name1': 'Ash Trays', 'id': 1, 'img':require('../../assets/ash-trays_thumbnail.jpg'),'details': 'Ben11'},
        {'name1': 'Cigarette Lighters', 'id': 2, 'img':require('../../assets/cigarette-lighters_thumbnail.jpg'),'details': 'Susan'},
        {'name1': 'Clothes Hanger', 'id': 3, 'img':require('../../assets/clothes-hanger_thumbnail.jpg'),'details': 'Robert'},
        {'name1': 'Coin Eye Glass Holder', 'id': 4, 'img':require('../../assets/coin-eye-glass-holder_thumbnail.jpg'),'details': 'Mary'},
        {'name1': 'Consoles Coolers', 'id': 5, 'img':require('../../assets/consoles-coolers_thumbnail.jpg'),'details': 'Daniel'},
        {'name1': 'Cup Holders Mugs', 'id': 6, 'img':require('../../assets/cup-holders-mugs_thumbnail.jpg'),'details': 'Laura'},
        {'name1': 'Door Knobs Handles', 'id': 7, 'img':require('../../assets/door-knobs-handles_thumbnail.jpg'),'details': 'John'},
        {'name1': 'Racing Seats', 'id': 8, 'img':require('../../assets/racing-seats_thumbnail.jpg'),'details': 'Debra'},
        {'name1': 'Steering Wheels', 'id': 9, 'img':require('../../assets/steering-wheels_thumbnail.jpg'),'details': 'Aron'},
        {'name1': 'Switches Outlets', 'id': 10, 'img':require('../../assets/switches-outlets_thumbnail.jpg'),'details': 'Ann'},
        {'name1': 'Vanity Mirror', 'id': 11, 'img':require('../../assets/vanity-mirror_thumbnail.jpg'),'details': 'Steve'},
        {'name1': 'Car Lights', 'id': 12, 'img':require('../../assets/car-lights_thumbnail.jpg'),'details': 'Olivia'}
        ]
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  gotoNextPage = () => {
    // alert("next Page");
    this.props.navigation.navigate("CarService", {screen: "CarService"});
  };

  gotoDetailPage=(item)=>{
    this.props.navigation.navigate("AutoPartsDetails", {screen: "AutoPartsDetails",item:item});
  }

  render() {
    return (
      <View >
        <View style={styles.container}>
          <View style = {styles.backgroundContainer}>
            <Image
              source = {require('../../assets/logo.png')}
              style={{ width: "100%", height: 215, marginLeft: 0,resizeMode: "cover"}}
            />
          </View>
          <View style = {styles.overlay}>
            <TouchableOpacity onPress = {() => this.gotoNextPage()}>
              <Image
                source = {require('../../assets/drawerImg.png')}
                style={{ width: 25, height: 25, marginLeft: 10,resizeMode: "cover"}}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress = {() => this.gotoNextPage1()}>
              <Image
                source = {require('../../assets/drawerImg.png')}
                style={{ width: 25, height: 25, marginRight: 10,resizeMode: "cover"}}
              />
            </TouchableOpacity> */}
          </View>
        </View>

        {/* Forming Segment <SegmentScreen style={{ top: -15}}/> */}
        <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            tabTitleStyle={styles.tabTitleStyle}
            values={['Auto Parts', 'Top Brands']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabStyle
            />
            { this.state.selectedIndex === 0 ?
                <View>
                    <ScrollView>
                      <View style={[styles.parent]}>
                      {  
                        this.state.names.map((item, index) => (
                          <View key = {item.id} style = {[styles.item,styles.child]}>
                              <TouchableOpacity onPress = {() => this.gotoDetailPage(item)}>
                                  <Image source = {item.img} style={{ width: 125, height: 125, marginLeft: 5}}/>
                                  <Text>{item.name1}</Text>
                              </TouchableOpacity>
                          </View>
                        ))
                    }
                    </View>
                  </ScrollView>
                </View>
                :
                <View>
                    <Text>Top Brands</Text>
                </View>
            }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  backgroundContainer: {
    // position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    // flex: 1
  },
  overlay: {
    position: 'relative',
    top: -185,
    // opacity: 0.5,
    // backgroundColor: '#000000'
  },
  parent: {
    width: '100%', 
    flexDirection: 'row', 
    flexWrap: 'wrap'
},
child: {
    width: '48%', 
    margin: '1%', 
    aspectRatio: 1
    
},
item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 3,
    margin: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: '#ffffff'
}
});
export default Home;