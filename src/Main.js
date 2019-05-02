import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  NativeButton,
  Alert
} from 'react-native';
import RNKakaoLogins from 'react-native-kakao-logins';

import * as utils from './LoginUtils';
const instructions = Platform.select({
  ios: 'IOS',
  android:
    'android'
});



const joinEmail = 'Weplay를 처음 방문하셨다면?? 회원가입을 클릭하세요';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isKakaoLogging: false,
      token: 'token has not fetched',
      user: null,
    };
  }

  // 카카오 로그인 시작.
  kakaoLogin() {
    console.log('   kakaoLogin-------------->   ');
    RNKakaoLogins.login((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
     
      this.getProfile();
    });
  }

  kakaoLogout() {
    console.log('   kakaoLogout   ');
    RNKakaoLogins.logout((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      Alert.alert('result', result);
    });
  }

  // 로그인 후 내 프로필 가져오기.
  getProfile() {
    console.log('getKakaoProfile');
    RNKakaoLogins.getProfile((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      this.props.navigation.navigate('JoinMember');
      console.log(result);
    });
  }





  naverLogin = async () => {
    const user = await utils.naverLoginStart();
    console.log(user);
    if(!!user){
      // this.props.history.push('/joinMember');
      this.props.navigation.navigate('JoinMember');
    }

  }

  facebookLogin = async ()=>{
    const user = await utils.fbAuth();
    console.log(user);
    if(!!user){
      // this.props.history.push('/joinMember');
      this.props.navigation.navigate('JoinMember');
    }
  }



  render() {

    return (
      <View Style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image style={logo.logoIcon} source={require('../img/loginpage/bitmap2x.png')} />
        <Image style={logo.logoTxt} source={require('../img/loginpage/logo2x.png')} />

        <TouchableOpacity
          onPress={() => this.facebookLogin()}>
          <Image style={btnImg.facebookJoinBtn} source={require('../img/loginpage/facebook2x.png')} />
        </TouchableOpacity>
        {/* <NativeButton>ddd</NativeButton> */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ComponentTest')}>
          <Image style={btnImg.naverJoinBtn} source={require('../img/loginpage/naver2x.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.naverLogin()}>
          <Image style={btnImg.naverJoinBtn} source={require('../img/loginpage/naver2x.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.kakaoLogin()}>
          <Image style={btnImg.kakaoJoinBtn} source={require('../img/loginpage/kakao2x.png')} />
        </TouchableOpacity>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.joinEmail}>{joinEmail}</Text>
      </View>
    );
  }
}


const logo = StyleSheet.create({
  logoIcon: {
    
    marginTop: 80
  },
  logoTxt: {
    marginTop: 30,
    marginBottom: 200,
    height: 23
  }

});

const btnImg = StyleSheet.create({
  facebookJoinBtn: {
    height: 48,
    marginBottom: 10,

  },
  naverJoinBtn: {
    height: 48,
    marginBottom: 10
  },
  kakaoJoinBtn: {
    height: 48,
    marginBottom: 10
  }

});

const styles = StyleSheet.create({

  joinEmail: {
    color: "grey",
    textAlign: "center"
  },

  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 45
  },

});
