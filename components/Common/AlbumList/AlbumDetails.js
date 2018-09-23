import React from 'react'
import {Text, View, Image, Linking} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetails = ({album}) =>{
    const {title,artist,thumbnail_image,image,url} = album
    const {thumbnailImageStyle, headerConentStyle,thumbnailContainerStyle,imageStyle} = styles;

    return(
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}> 
                    <Image style={thumbnailImageStyle} source={{uri:thumbnail_image}}/>
                </View>
                <View style={headerConentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{uri:image}}
                />
            </CardSection>
        </Card>
    )
}

const styles= {
    headerConentStyle:{
        justifyConent:'space-around',
        flexDirection:'column'
    },
    thumbnailImageStyle:{
        width:50,
        height:50
    },
    thumbnailContainerStyle:{
        justifyConent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null

    }
}
export default AlbumDetails;