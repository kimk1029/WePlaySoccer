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
  ios: 'IOS',
  android:
    'android'
});

const joinEmail = 'Weplay를 처음 방문하셨다면? 회원가입을 클릭하세요' 

export default class Sex extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
        <Text>ssss</Text>
      </View>
    );
  }
}



const logo = StyleSheet.create({
  logoIcon : {
    marginTop : 110
  },
  logoTxt : {
    marginTop : 30,
    marginBottom : 200,
    height : 23
  }

})
const btnImg = StyleSheet.create({
  facebookJoinBtn: {
    height : 48,
    marginBottom : 10,
    
  },
  naverJoinBtn :{
    height : 48,
    marginBottom : 10
  },
  kakaoJoinBtn:{
    height : 48,
    marginBottom : 10
  }

})
const styles = StyleSheet.create({

  joinEmail: {
      color : "grey",
      textAlign: "center"
  },

  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 45
  },

});
