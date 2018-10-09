import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    AsyncStorage,
} from 'react-native';

import {createStackNavigator} from 'react-navigation';


import { FlatList } from 'react-native-gesture-handler';
import GalleryRowModel from './GalleryRowModel';
import PublicPhotoPage from './PublicPhotoPage';
import Login from './Login';



export default class Secured extends Component{
    constructor(props){
        super(props);

        this.state = {
            listImage: []
        };
        this.loadPhotoList();
        appContext = this;

        //const value = await AsyncStorage.getItem('userToken');
        //this._retrieveData();
    }

    // editUser = () => {
    //     this.props.navigation.navigate("PublicPhotoPage");
    // };

    _retrieveData = async () => {
   
          const value = await AsyncStorage.getItem('userInfo');
          const result = JSON.parse(value);
          const token = result.access_token;
          console.log(token);
          
          
    }




    // _retrieveData = async () => {
    //     try {
    //       const value = await AsyncStorage.getItem('userInfo');
    //       const result = JSON.parse(value);
    //       const token = result.access_token;
          
    //       if (token !== null) {
    //         // We have data!!
    //         return token;
    //       }
    //      } catch (error) {
    //        // Error retrieving data
    //        console.log(error);
    //      }
    // }


    
    //https://testglostarsdevelopers.azurewebsites.net/api/images/competition/1
    

    loadPhotoList(){
        fetch("https://testglostarsdevelopers.azurewebsites.net/api/images/competition/1", {
            method: "GET",
            headers:{
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer azL__7O75zmN4m516__horyzhwyBaDbGq_TS6maRkCHFIOdaqidF5SUACKLFSJ87CwfDBV49Dn3uQ5_D_5lQ8GbpLsll_6RjfWwRotzXAvdaGIwz442vVEhdN7xBHn45PakNIIwWVDz8HXnHYbycUBg1iaU6jIqhKzLAhfmeEQJ_2pO4XcYe1-u5CKtrV3hBBLLdQDh2fjdLqYVY7bdCKxyOHCNvGQCSZZY5AuImu_hamF9H2_aTSZ6RxpLQ_0SZKMrqpYE67aeEyvhNwsR2yDsAp-2b2wMbf1AWurKTYUzTVoWtPvbFVL8zF8fjYwE1GuWtjumyCws2rvmmyN_KBDC7yUmgAyXX-fN5UhE0bClKcGhBIhX8QjK8E-faCb_q7_LDlwTm0yOvo7bEnIkFwWWICLvQUNwWVmNbwzuVxt3aMW4Z8yO29R0RY6f9x5ZVc0hWaPfPUkWXW6US-ECrUnnPOBoU-XXBoPlVdF99vLaMVhglXqBMoHGUHErJePuFFXsYzNPcBkG5XmMUdO5kH2xMRVcY6_Djw7bJzCcF5IfMPQ2KWq_iYiRVwqxoQztS"
                // "Authorization": "Bearer "+ this._retrieveData
            }
        })
        .then(response => response.json())
        .then(function(picInfo){
            console.log(picInfo);
            appContext.setState({
                listImage: picInfo.resultPayload
            });
        });
    }

    render(){
        return(
            <ScrollView style= {{padding:20}}>
                <Text style={{fontSize:27}}>
                    Welcome
                </Text>

                {/* <Button onPress={this.props.onPublicPress} title="PublicPhotoPage" /> */}

                <View style={{margin:20}}/>
                <Button onPress={() =>this.props.appContext.props.navigation.navigate('LoginScreen')} title="Logout" />

                <View style={{margin:20}}/>
                <Button
                    title="Go to PublicPhotoPage 1"
                    onPress={() => this.props.navigation.navigate('LoginScreen')}
                />

                <FlatList 
                    data = {this.state.listImage}
                    renderItem ={({item}) => <GalleryRowModel imageUrl = {item.picUrl} />}
                /> 

                

            </ScrollView>
           
        );
    }
}