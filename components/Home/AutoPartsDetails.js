import React, {Component} from 'react'
import {View, Text, Image, Dimensions, StyleSheet,TouchableOpacity} from 'react-native'
// import Carousel from 'react-native-banner-carousel';
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://static.pepboys.com/images/v2/meganav/content/content-parts.png",
    "https://static.pepboys.com/images/productImages/6023100/SEJ_L.jpg"
];


class AutoPartsDetails extends Component {
    render(){
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        // alert("itemId ::"+item);

        return(
            <View style={[styles.parent]}>
            {   
                <View style = {[styles.child]}>
                    {/* Top View */}
                    <View style = {[styles.topView]}>
                        <Image source = {item.img} style={[styles.imgTopView]}/>
                    </View>
    
                    <View style={[styles.drawLine]}></View>
                    {/* Middle View */}
                    <View style = {[styles.middleView]}>
                        <View style={styles.leftMiddleView}>
                            <Text style={[styles.text, {textAlign: 'left',fontSize: 20,fontFamily: 'Cochin'}]}>
                                {item.name1}
                            </Text>
                            <Text style={[styles.text, {textAlign: 'left',fontSize: 13}]}>
                                Part #:51343434
                            </Text>
                            
                        </View>
                        <View style={styles.rightMiddleView}>
                            <Text style={[styles.text, {textAlign: 'right'}]}>
                                $130.9
                            </Text>
                            <TouchableOpacity
                                style = {styles.submitButton}>
                                <Text style = {styles.submitButtonText}> ADD TO CART </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.drawLine]}></View>
                    
                    {/* Bottom View */}
                    <View style = {[styles.bottomView]}>
                        <Text style={[styles.text, {textAlign: 'left'}]}>
                            The Gear Up Helix Case offers superior protection for your Apple iPhone 4/4S. The case is double layered and shock resistant to defend your smart-phone from falls and bumps. Easy to get in and out of your pocket without dropping. Case comes in a unique blue and black design.
                        </Text>
                    </View>
                </View>
            }
            </View>
        ) 
    }  
}

export default AutoPartsDetails;

const styles = StyleSheet.create({
    parent: {
        width: '100%', 
        flexDirection: 'row', 
        flexWrap: 'wrap'
    },
    child: {
        width: '100%',
        backgroundColor: 'white'
    },
    topView :{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
    },
    middleView:{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    bottomView:{
        height: 500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    leftMiddleView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    rightMiddleView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    imgTopView: {
        width: 125,
        height: 125, 
        marginLeft: 5
    },
    drawLine:{
        width:'100%',
        height:1,
        backgroundColor:'lightgray'
    },
    submitButton: {
        backgroundColor: '#0000FF',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center'
    }
});

/*
export default class AutoPartsDetails extends Component {
    
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});*/
