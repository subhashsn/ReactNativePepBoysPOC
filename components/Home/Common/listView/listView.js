import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View ,ScrollView,Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import { Actions } from 'react-native-router-flux';
// import autoPartData from '../../../Json/AutoParts.json'

const ListView = () => {
   
    // json = autoPartData;
    // console.log("jsonData ..",json);
    
   state = {
        names: [
        {'name1': 'Ash Trays', 'id': 1, 'img':require('../../../../assets/ash-trays_thumbnail.jpg'),'details': 'Ben11'},
        {'name1': 'Cigarette Lighters', 'id': 2, 'img':require('../../../../assets/cigarette-lighters_thumbnail.jpg'),'details': 'Susan'},
        {'name1': 'Clothes Hanger', 'id': 3, 'img':require('../../../../assets/clothes-hanger_thumbnail.jpg'),'details': 'Robert'},
        {'name1': 'Coin Eye Glass Holder', 'id': 4, 'img':require('../../../../assets/coin-eye-glass-holder_thumbnail.jpg'),'details': 'Mary'},
        {'name1': 'Consoles Coolers', 'id': 5, 'img':require('../../../../assets/consoles-coolers_thumbnail.jpg'),'details': 'Daniel'},
        {'name1': 'Cup Holders Mugs', 'id': 6, 'img':require('../../../../assets/cup-holders-mugs_thumbnail.jpg'),'details': 'Laura'},
        {'name1': 'Door Knobs Handles', 'id': 7, 'img':require('../../../../assets/door-knobs-handles_thumbnail.jpg'),'details': 'John'},
        {'name1': 'Racing Seats', 'id': 8, 'img':require('../../../../assets/racing-seats_thumbnail.jpg'),'details': 'Debra'},
        {'name1': 'Steering Wheels', 'id': 9, 'img':require('../../../../assets/steering-wheels_thumbnail.jpg'),'details': 'Aron'},
        {'name1': 'Switches Outlets', 'id': 10, 'img':require('../../../../assets/switches-outlets_thumbnail.jpg'),'details': 'Ann'},
        {'name1': 'Vanity Mirror', 'id': 11, 'img':require('../../../../assets/vanity-mirror_thumbnail.jpg'),'details': 'Steve'},
        {'name1': 'Car Lights', 'id': 12, 'img':require('../../../../assets/car-lights_thumbnail.jpg'),'details': 'Olivia'}
        ]
   }    

    gotoDetailPage=()=>{
        // console.log("name in goToDetails Page ..",item);
        alert("home to details page");
        // this.props.navigation.navigate("AutoPartsDetails", {screen: "AutoPartsDetails"});
        // Actions.AutoPartsDetails(item)
    }

   return (
            <ScrollView>
                <View style={[style.parent]}>
                {  
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {[style.item,style.child]}>
                        <TouchableOpacity onPress = {() => this.gotoDetailPage()}>
                            <Image source = {item.img} style={{ width: 125, height: 125, marginLeft: 5}}/>
                            <Text>{item.name1}</Text>
                        </TouchableOpacity>
                     </View>
                  ))
               }
               </View>
            </ScrollView>
   )
}

//<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

//<Image source = {require('../../../assets/app/pepboys1.png')} style={{ width: 125, height: 125, marginLeft: 5}}/>
export default ListView

const style = StyleSheet.create({
    
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