import React, {Component}  from 'react';
import {
    Text,
    Button,
    StatusBar,
    TextInput,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { Constants } from 'expo';
import { Header } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

export default class ManageKeyboardLayout extends Component{

    state = {
        email: '',
    };


    render(){
        return(
            <View style={StyleSheet.container}> 
                <StatusBar barStyle='light-content'/>
                <View style={styles.header}>
                    <Text style={styles.description}>
                        This is header section of this page 
                    </Text>
                    
                </View>

                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    ref={ref=> {this._emailInput = ref}} // dont understand this line
                    placeholder="email@example.com"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    returnKeyType="send"
                    onSubmitEditing={this._submit}
                    blurOnSubmit={true}    
                />

                <View>
                    <Button 
                        title="Sign Up" 
                        onPress={this._submit} 
                    />
                    <Text style={styles.legal}>
                        Important or Legal section
                    </Text>
                </View>

                <KeyboardAvoidingView behavior='padding' style={styles.form}>
                    <TextInput
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        ref={ref=> {this._emailInput = ref}} // dont understand this line
                        placeholder="email@example.com"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="send"
                        onSubmitEditing={this._submit}
                        blurOnSubmit={true}    
                    />
                    

                    <View>
                        <Button 
                            title="Sign Up" 
                            onPress={this._submit} 
                        />
                        <Text style={styles.legal}>
                            Important or Legal section
                        </Text>
                    </View>
                </KeyboardAvoidingView> 
            </View>
        );
    }


    _submit = () => {
        alert(`Confirmation email has been sent to ${this.state.email}`);
    };


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    header:{
        paddingTop: 20 + Constants.statusBarHeight,
        padding:20,
        backgroundColor: '#336699',
    },
    description:{
        fontSize:14,
        color:'white',
    },
    form:{
        flex:1,
        justifyContent: 'space-between',
    },
    legal:{
        margin: 10, 
        color: '#333',
        fontSize:12,
        textAlign:'center'
    },
    Input:{
        margin:20,
        marginBottom: 0,
        height: 34,
        paddingHorizontal: 10,
        borderRadius: 4,
        borderColor:'#ccc',
        borderWidth: 1,
        fontSize:16,
    }
});