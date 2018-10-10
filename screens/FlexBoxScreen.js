import React from 'react';
import {
    AppRegistry,
    View,
    Text,
    Textarea
} from 'react-native';


export default class FlexBoxScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, flexDirection:'row'}}>
                <View style={{width: 100, height:100, backgroundColor: 'powderblue'}}>
                    <Text>This is flex box</Text>
                </View>
                <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>
                    <Text>This is another box</Text>
                </View>
                <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}>
                    <Text>This 3rd Flex Box</Text>
                </View>
            </View>
        );
    }
}