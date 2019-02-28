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
  ios: 'IOS\n version',
  android:
    'android\n' +
    'version'
});

const joinEmail = 'Weplay를 처음 방문하셨다면? 회원가입을 클릭하세요' 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image style={{}}source={require('./img/loginpage/bitmap2x.png')} />
        <Image style={{}}source={require('./img/loginpage/logo2x.png')} />
        <Image style={imgStyle.facebookJoinBtn}source={require('./img/loginpage/facebook2x.png')} />
        <Image style={imgStyle.naverJoinBtn}source={require('./img/loginpage/naver2x.png')} />
        <Image style={imgStyle.kakaoJoinBtn}source={require('./img/loginpage/kakao2x.png')} />
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.joinEmail}>{joinEmail}</Text>
      </View>
    );
  }
}

const imgStyle = StyleSheet.create({
  facebookJoinBtn: {
     
  },
  naverJoinBtn :{
     
  },
  kakaoJoinBtn:{
    
  }

})

const styles = StyleSheet.create({

  joinEmail: {
      color : "grey",
      textAlign: "center"
  },
  title: {
    color : "black",
    fontSize : 30,
    fontWeight : "200"

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },

});
