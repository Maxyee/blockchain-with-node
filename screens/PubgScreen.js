import React from 'react';
import {
    View,
    Text,
    AppRegistry,
    Image,
    StyleSheet
} from 'react-native';


export default class PubgScreen extends React.Component{
    render(){
        let pic = {
            uri: 'https://i.redd.it/6viuv5taxaf01.jpg'
        };
        return(
            <View>
                <Text style={styles.container}>Pubg Mobile Picture App</Text>
                <Image source={pic} style={{width: 400, height: 400}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        color:'green',
        fontSize:20
    }
});