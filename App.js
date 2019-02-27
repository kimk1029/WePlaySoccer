/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TextInput, Dimensions,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button f1or dev menu',
});

const joinEmail = 'Weplay를 처음 방문하셨다면? 회원가입을 클릭하세요' 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <StatusBar barStyle="light-content"></StatusBar>
        <Image style={{ width:'90%',resizeMode:'contain'}}source={require('./img/bitmap.png')} />
        <Image style={{ width:'100%',resizeMode:'contain'}}source={require('./img/logo2x.png')} />
        <Text style={styles.title}>WePlay</Text>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.joinEmail}>{joinEmail}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  joinEmail: {
      color : "grey",
      textAlign: "center",
      marginTop : 40
  },
  title: {
    color : "black",
    fontSize : 30,
    marginTop : 10,
    fontWeight : "200",
    marginBottom : 0

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 40,
  },

});
