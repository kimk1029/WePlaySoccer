/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TextInput, Dimensions} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {height, width} = Dimensions.get("window");

export default class App extends Component {
  render() {

    const fill = 'rgb(134, 65, 244)';
    const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ];
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.title}>WePlay</Text>
        <Text style={styles.welcome}>Welcome to React 2Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"New"}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color : "white",
    fontSize : 30,
    marginTop : 50,
    fontWeight : "200",
    marginBottom : 30

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  card :{
    backgroundColor : "white",
    flex: 1,
    width: width - 30,
    borderRadius: 20,
    ...Platform.select({
      ios:{
        shadowColor:"red",
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }

      },
      android: {
        elevation: 5
      }
    })
   
  }
});
