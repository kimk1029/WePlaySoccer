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

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
        <Image style={logo.logoIcon}source={require('./img/loginpage/bitmap2x.png')} />
        <Image style={logo.logoTxt}source={require('./img/loginpage/logo2x.png')} />
        <Image style={btnImg.facebookJoinBtn}source={require('./img/loginpage/facebook2x.png')}onPress={() => alert('로그인 버튼')} />
        <Image style={btnImg.naverJoinBtn}source={require('./img/loginpage/naver2x.png')} />
        <Image style={btnImg.kakaoJoinBtn}source={require('./img/loginpage/kakao2x.png')} />
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.joinEmail}>{joinEmail}</Text>
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
