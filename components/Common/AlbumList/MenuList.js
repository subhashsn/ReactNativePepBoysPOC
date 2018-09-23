import React from 'react'
import {Text, View, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
// import renderIf from './renderIf'

const MenuList = (props) =>{

    console.log("location ::",props.locations)
    state = {isUserLoggedIn:"true"}

    // console.log("this.state.isUserLoggedIn ::",this.state.isUserLoggedIn);
    return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}> 
                    <Image style={styles.thumbnailImageStyle} source={props.locations.img}/>
                </View>
                <View style={styles.headerConentStyle}>
                    <Text style={styles.headerTextStyle}>{props.locations.header}</Text>
                    <Text style={styles.addressTextStyle}>{props.locations.address}</Text>
                    <View style={styles.statusViewStyle}>
                        <View style={styles.statusViewInsideStyle}>
                            <Text style={styles.statusTextInsideStyle}> {props.locations.status}</Text>
                        </View>
                        <Text style={styles.slotTextStyle}> {props.locations.slot}</Text>
                    </View>
                    <Text style={styles.reviewTextStyle}>{props.locations.review}</Text>

                    {/* {renderIf(this.state.isUserLoggedIn, 
                        <Text style={styles.reviewTextStyle}>{props.locations.review}</Text>
                    )} */}
                </View>
            </CardSection>
        </Card>
    )
}

const styles= {
    thumbnailContainerStyle:{
        justifyConent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        flex:2
    },
    headerConentStyle:{
        justifyConent:'space-around',
        flexDirection:'column',
        flex:3
    },
    thumbnailImageStyle:{
        width:100,
        height:100
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    },
    headerTextStyle:{
        fontSize:13
    },
    addressTextStyle:{
        fontSize:12,
        fontFamily: 'Cochin'
    },
    slotTextStyle:{
        fontSize:11,
        flexDirection:'row'
    },
    reviewTextStyle:{
        fontSize:10,
        color:"#0000FF"
    },
    slotViewStyle:{
        borderColor:'green',
        border:2
    },
    statusViewStyle:{
        flexDirection: 'row'
    },
    statusViewInsideStyle:{
        width: 75, 
        height: 20, 
        borderColor:'powderblue',
        borderWidth:2
    },
    statusTextInsideStyle:{
        fontSize:10,
        color:'steelblue',
        alignItems:'center'
    }
}
export default MenuList;