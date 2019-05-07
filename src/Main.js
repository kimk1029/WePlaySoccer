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
  Alert,
  Button
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
    if (!!user) {
      // this.props.history.push('/joinMember');
      this.props.navigation.navigate('JoinMember');
    }

  }

  facebookLogin = async () => {
    const user = await utils.fbAuth();
    console.log(user);
    if (!!user) {
      // this.props.history.push('/joinMember');
      this.props.navigation.navigate('JoinMember');
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={logo.logoView}>
          <Image style={logo.logoIcon} source={require('../assets/img/loginpage/bitmap.png')} />
          <Image style={logo.logoTxt} source={require('../assets/img/loginpage/logo.png')} />
        </View>
        <View Style={btnImg.btnView}>
          <TouchableOpacity
            onPress={() => this.facebookLogin()}>
            <Image style={btnImg.facebookJoinBtn} source={require('../assets/img/loginpage/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.naverLogin()}>
            <Image style={btnImg.naverJoinBtn} source={require('../assets/img/loginpage/naver.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.kakaoLogin()}>
            <Image style={btnImg.kakaoJoinBtn} source={require('../assets/img/loginpage/kakao.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ComponentTest')}>
            <Text>Componnent Test Page</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.instructions}>{instructions}</Text>
          <Text style={styles.joinEmail}>{joinEmail}</Text>
        </View>

      </View>
    );
  }
}


const logo = StyleSheet.create({
  logoView: {
    alignItems: 'center'
  },
  logoIcon: {
    // marginTop: 80
  },
  logoTxt: {
    marginTop: 30,
    marginBottom: 200,
    height: 23
  }

});

const btnImg = StyleSheet.create({
  btnView: {
    height:'100%',
    width : '100%',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
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
  container: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  joinEmail: {
    color: "grey"
  },
  instructions: {
    color: '#333333',
    marginTop: 45
  },

});
