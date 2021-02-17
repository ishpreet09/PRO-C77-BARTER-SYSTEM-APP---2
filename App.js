import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/loginScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <LoginScreen/>
      </View>
    )
  }
}