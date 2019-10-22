import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import * as utils from './LoginUtils';

const instructions = Platform.select({
  ios: 'IOS',
  android: 'android',
});

const joinEmail = 'Weplay를 처음 방문하셨다면?? 회원가입을 클릭하세요';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isKakaoLogging: false,
      // token: 'token has not fetched',
      user: null,
    };
  }

  onLogin = user => {
    console.log(user);
    this.setState({ user }, () => {
      const { navigation } = this.props;
      const {
        user: { email = 'default@email.com', id: uid, nickname: userName },
      } = this.state;
      if (uid) {
        navigation.navigate('JoinMember', {
          uid,
          email,
          userName,
        });
      }
    });
  };

  kakaoLogin = async () => {
    const { user } = this.state;
    const { email, id, nickname } = user;
    const { navigation } = this.props;
    console.log('-------------------Kakao->email');
    const result = await utils.kakaoLogin();
    this.setState({ user: result });
    console.log('-------------------Kakao->email');
    console.log(user);
    if (email) {
      navigation.navigate('JoinMember', {
        uid: id,
        email,
        userName: nickname,
      });
    }
  };

  naverLogin = async () => {
    const { user } = this.state;
    const { email, id, nickname } = user;
    const { navigation } = this.props;
    console.log('-------------------Naver->email');
    const result = await utils.naverLoginStart();
    this.setState({ user: result.response });
    console.log('-------------------Naver->email');
    console.log(user);
    if (email) {
      navigation.navigate('JoinMember', {
        uid: id,
        email,
        userName: nickname,
      });
    }
  };

  facebookLogin = async () => {
    const { user } = this.state;
    const { email, id, username } = user;
    const { navigation } = this.props;
    console.log('-------------------Facebook->email');
    const result = await utils.fbAuth();
    this.setState({ user: result });
    console.log('-------------------Facebook->email');
    console.log(user);
    if (email) {
      navigation.navigate('JoinMember', {
        uid: id,
        email,
        userName: username,
      });
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={logo.logoView}>
          <Image style={logo.logoIcon} source={require('../assets/img/loginpage/bitmap.png')} />
          <Image style={logo.logoTxt} source={require('../assets/img/loginpage/logo.png')} />
          <Text style={logo.logoSubTxt}>발롱도르를 위한 최고의 도전.</Text>
        </View>
        <View Style={btnImg.btnView}>
          <TouchableOpacity onPress={() => this.facebookLogin()}>
            <Image style={btnImg.facebookJoinBtn} source={require('../assets/img/loginpage/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.naverLogin()}>
            <Image style={btnImg.naverJoinBtn} source={require('../assets/img/loginpage/naver.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.kakaoLogin()}>
            <Image style={btnImg.kakaoJoinBtn} source={require('../assets/img/loginpage/kakao.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ComponentTest')}>
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
    alignItems: 'center',
  },
  logoIcon: {
    // marginTop: 80
  },
  logoTxt: {
    marginTop: 30,
    marginBottom: 20,
    height: 23,
  },
  logoSubTxt: {
    marginBottom: 160,
  },
});

const btnImg = StyleSheet.create({
  btnView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookJoinBtn: {
    height: 48,
    marginBottom: 10,
  },
  naverJoinBtn: {
    height: 48,
    marginBottom: 10,
  },
  kakaoJoinBtn: {
    height: 48,
    marginBottom: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  joinEmail: {
    color: 'grey',
  },
  instructions: {
    color: '#333333',
    marginTop: 45,
  },
});
