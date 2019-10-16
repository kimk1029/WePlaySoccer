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


  kakaoLogin = async () => {
    const result = await utils.kakaoLogin();
    this.setState({ user: result })
    console.log("-------------------Kakao->email");
    console.log(this.state.user);
    if (!!this.state.user.email) {
      this.props.navigation.navigate('JoinMember', {
        uid: this.state.user.id,
        email: this.state.user.email,
        userName: this.state.user.nickname
      });
    }
  }

  naverLogin = async () => {
    const result = await utils.naverLoginStart();
    this.setState({ user: result.response })
    console.log("-------------------Naver->email");
    console.log(this.state.user);
    if (!!this.state.user.email) {
      this.props.navigation.navigate('JoinMember', {
        uid: this.state.user.id,
        email: this.state.user.email,
        userName: this.state.user.nickname
      });
    }

  };

  facebookLogin = async () => {
    const result = await utils.fbAuth();
    this.setState({ user: result });
    console.log("-------------------Facebook->email");
    console.log(this.state.user);
    if (!!this.state.user.email) {
      this.props.navigation.navigate('JoinMember', {
        uid: this.state.user.id,
        email: this.state.user.email,
        userName: this.state.user.username
      });
    }
  };

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={logo.logoView}>
          <Image style={logo.logoIcon} source={require('../assets/img/loginpage/bitmap.png')} />
          <Image style={logo.logoTxt} source={require('../assets/img/loginpage/logo.png')} />
          <Text style={logo.logoSubTxt}>발롱도르를 위한 최고의 도전.</Text>
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
        <View style={{ alignItems: 'center', marginBottom: 80 }}>
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
    marginBottom: 20,
    height: 23
  },
  logoSubTxt: {
    marginBottom: 160
  }

});

const btnImg = StyleSheet.create({
  btnView: {
    height: '100%',
    width: '100%',
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
    marginTop: 50,
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
