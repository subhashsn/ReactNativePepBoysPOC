import React,{Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetails from './AlbumDetails';


class AlbumList extends Component{
    state = {album:[]}

    componentWillMount() {
        // console.log("component will mount");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response=>this.setState({album:response.data}));
    }

    renderAlbums(){
        
        return this.state.album.map(album => 
            <AlbumDetails key={album.title} album={album}></AlbumDetails>
        )
    }

    // <Text key={album.title}>{album.title}</Text>

    render(){
        console.log(this.state);
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default AlbumList;