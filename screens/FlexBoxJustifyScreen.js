import React from 'react';
import {
    View
} from 'react-native';


export default class FlexBoxJustifyScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'stretch',
            }}>
                <View style={{height: 100, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}