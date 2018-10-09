import React, {Component} from 'react';

import {
    ScrollView,
    Text,
    View,
    Button,
    AsyncStorage
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import GalleryRowModel from './GalleryRowModel';


export default class PublicPhotoPage extends Component{
    constructor(){
        super();

        this.state = {
            listPublicImage:[]
        };
        this.loadPublicPhotoList();
        appContext = this;

        //const value = await AsyncStorage.getItem('userToken');
    }

    //value = await AsyncStorage.getItem('userToken');

    loadPublicPhotoList(){
        fetch("https://testglostarsdevelopers.azurewebsites.net/api/images/public/1",{
            method: "GET",
            headers:{
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer azL__7O75zmN4m516__horyzhwyBaDbGq_TS6maRkCHFIOdaqidF5SUACKLFSJ87CwfDBV49Dn3uQ5_D_5lQ8GbpLsll_6RjfWwRotzXAvdaGIwz442vVEhdN7xBHn45PakNIIwWVDz8HXnHYbycUBg1iaU6jIqhKzLAhfmeEQJ_2pO4XcYe1"
            }
        })
        .then(response => response.json())
        .then(function(picInfo){
            console.log(picInfo);
            appContext.setState({
                listPublicImage: picInfo.resultPayload
            });
        });
    }

    render(){
        return(
            <ScrollView style= {{padding:20}}>
                <Text style={{fontSize:27}}>
                    Public Photo Page
                </Text>

                <View style={{margin:20}}/>
                
                <View style={{margin:20}}/>
                <Button onPress={this.props.onLogoutPress} title="Logout" />

                <FlatList 
                    data = {this.state.listPublicImage}
                    renderItem ={({item}) => <GalleryRowModel imageUrl = {item.picUrl} />}
                /> 

            </ScrollView>
        );
    }
}

