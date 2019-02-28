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
        <Image style={{}}source={require('./img/loginpage/bitmap.png')} />
        <Image style={{}}source={require('./img/loginpage/logo.png')} />
        <Image style={btnImg.facebookJoinBtn}source={require('./img/loginpage/facebook.png')} />
        <Image style={btnImg.naverJoinBtn}source={require('./img/loginpage/naver.png')} />
        <Image style={btnImg.kakaoJoinBtn}source={require('./img/loginpage/kakao.png')} />
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.joinEmail}>{joinEmail}</Text>
      </View>
    );
  }
}

const btnImg = StyleSheet.create({
  facebookJoinBtn: {
     
  },
  naverJoinBtn :{
     
  },
  kakaoJoinBtn:{
    
  }

})

const logo = StyleSheet.create({

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
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
  },

});
