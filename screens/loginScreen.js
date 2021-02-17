import * as React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity, ToastAndroid, Image, KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase from 'firebase';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    userSignUp = (email, pass) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then(
            (response)=>{
                ToastAndroid.show("User added successfully", ToastAndroid.SHORT)
            }
        ).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        })
    }

    userLogin=(email, pass)=>{
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(
            ()=>{
                ToastAndroid.show("Login is successful", ToastAndroid.SHORT)
            }
        ).catch((error)=>{
            var errorCode=error.code;
            var errorMessage=error.message;
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        })
    }
    
    render(){
        return(
            <KeyboardAvoidingView style={{backgroundColor:'#FFE0B2'}} behavior='padding' enabled>
            <View >
               <Image
                    source={require("../assets/sdsd.png")}
                    style={{marginTop:50, width:'85%', height:190, alignSelf:'center'}}
                    />
                
                   <Text style={{fontSize:30, color:'orange', marginTop:15, alignSelf:'center'}}>Barter System</Text>
                </View>
                <View style={{marginTop:30}}> 
                    <Text style={{marginLeft:40}}>USERNAME</Text>
                </View>
                <View>
                    <TextInput
                    style={{borderBottomColor:"orange", borderBottomWidth:3, width:'80%', marginTop:20, alignSelf:'center'}}
                    onChangeText={(text)=>{
                        this.setState({
                            email:text
                        })

                    }}
                    value={this.state.email}
                    />
                    
                    <Text style={{marginLeft:40, marginTop:7}}>PASSWORD</Text>
              
                
                    <TextInput
                    style={{borderBottomColor:"orange", borderBottomWidth:3, width:'80%', marginTop:20, alignSelf:'center'}}
                    secureTextEntry={true}
                    onChangeText={(text1)=>{
                        this.setState({
                            password:text1
                        })

                    }}
                    value={this.state.password}
                    />
                    
                
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                    style={{  
                        marginTop:50,
                        width:300,
                        height:50,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:25,
                        backgroundColor:"white",
                        shadowColor: "#000",
                        shadowOffset: {
                           width: 0,
                           height: 8
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                  }}
                  onPress={()=>{this.userLogin(this.state.email, this.state.password)}}
                    >
                        <Text style={{fontSize:20, color:'orange', fontWeight:'bold'}}>LOGIN</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{  
                        marginBottom:130,
                        marginTop:15,
                        width:300,
                        height:50,
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:25,
                        backgroundColor:"white",
                        shadowColor: "#000",
                        shadowOffset: {
                           width: 0,
                           height: 8
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,
                  }}
                  onPress={()=>{this.userSignUp(this.state.email, this.state.password)}}
                    >
                        <Text style={{fontSize:20, color:'orange', fontWeight:'bold'}}>SIGN-UP</Text>

                    </TouchableOpacity>
                </View>

           
            </KeyboardAvoidingView>
        )
    }
}