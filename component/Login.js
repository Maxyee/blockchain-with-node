import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    View,
    Button,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
// import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component{

    constructor(props){
        super(props);
        loginContext=this;
    }
    state = {
        username: '',
        password: '',
        isLoggingIn: false,
        message: ''
    }

    _userLogin = () => {

        this.setState({isLoggingIn:true, message:'' });

        var params = {
            Email: this.state.username,
            Password: this.state.password
        };

        console.log(params);

        // var fromBody = [];
        // for (var property in params){
        //     var encodedKey = encodeURIComponent(property);
        //     var encodedValue = encodeURIComponent(params[property]);
        //     fromBody.push(encodedKey + "=" + encodedValue);
        // }

        // fromBody = fromBody.join("&");

        var proceed = false;
        fetch("https://testglostarsdevelopers.azurewebsites.net/api/account/LoginToken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            console.log(response.access_token);
            if(response.error){
                this.setState({message: response.message});
            }
            else{
                proceed = true;
                // // _storeData=async ()=>{
                // //     await AsyncStorage.setItem("userInfo",JSON.stringify(response));
                // // };

                // _storeData=async ()=>{
                //     await AsyncStorage.setItem("userToken",JSON.stringify(response.access_token));
                // };

                _storeData = async () => {
                    try {
                      await AsyncStorage.setItem('userInfo', JSON.stringify(response));
                    } catch (error) {
                      console.log(error);
                    }
                }
                // loginContext.props.appContext.props.navigation.navigate("LoginScreen");
            }
        })
        .then(() => {
            this.setState({isLoggingIn: false})
            if(proceed){
                this.props.onLoginPress();
            }
        })
        .done();
    }

    render(){
        return(
            <ScrollView style = {{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput
                    placeholder="Username"
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={(password) => this.setState({password})}
                />
                {/* error message section */}
                {!!this.state.message && (
                    <Text style={{ fontSize:14, color:'red', padding:5 }}>
                        {this.state.message}
                    </Text>
                )}


                {this.state.isLoggingIn && <ActivityIndicator />}
                <View style={{margin:7}}/>
                <Button
                    disabled={this.state.isLoggingIn || !this.state.username || !this.state.password}
                    onPress={ this._userLogin }
                    title="Submit"
                />
                <Text>Please Login For Better Component</Text>

                <View style={{margin:20}}/>
                <Text>Do you want learn more about react Native</Text>
                <Text>Please click the button below for better learning credentials</Text>

                <View style={{margin:20}}/>
                <Button
                    title="Learn Flex Box"
                    onPress={()=>this.props.pageChange.navigate('FlexBoxScreen')}
                />

                <View style={{margin:20}}/>
                <Button
                    color = "red"
                    title="Learn Flex Box Justify"
                    onPress={()=>this.props.pageChange.navigate('FlexBoxJustifyScreen')}
                />
            </ScrollView>
        );
    }
}
