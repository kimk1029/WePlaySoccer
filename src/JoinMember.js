/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Image, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlowButton from './component/FlowButton';
import callApi from './utils/callApi';
const instructions = Platform.select({
  ios: 'IOS',
  android:
    'android'
});
const joinEmail = 'Weplay를 처음 방문하셨다면? 회원가입을 클릭하세요'

export default class JoinMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      name: '',
      age: '1989(30)'
    };
  }

  fuck = async () => {
    //     POST /user HTTP/1.1
    // Content-Type: application/json
    // Host: ec2-52-79-236-250.ap-northeast-2.compute.amazonaws.com:8080
    // Content-Length: 205

    // {
    //   "socialId" : "99999",
    //   "socialAccessToken" : "13ns23rfs9c",
    //   "socialType" : "FACEBOOK",
    //   "email" : "rhkdgus2002@gmail.com",
    //   "userNickName" : "ryudung",
    //   "userName" : "?????????",
    //   "age" : 1989
    // }
    try {
      const data = await callApi('POST', 'user', {
        "socialId": "99999",
        "socialAccessToken": "13ns23rfs9c",
        "socialType": "FACEBOOK",
        "email": "rhkdgus2002@gmail.com",
        "userNickName": "ryudung",
        "userName": "kk",
        "age": '1989'
      });

      console.log(data);

    } catch (error) {
      console.log(error)
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <StatusBar barStyle="light-content"></StatusBar>
          <Text style={styles.layer}>환영합니다. ({this.props.navigation.getParam('uid')})</Text>
          <View style={styles.cardTop}>
            <Text style={styles.txt}>E-Mail</Text>
            <TextInput
              style={styles.txtStyle}
              onChangeText={(text) => this.setState({ text })}
              value={this.props.navigation.getParam('email')}
            />
          </View>


          <View style={styles.cardMiddle}>
            <Text style={styles.txt}>닉네임</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(username) => this.setState({ username })}
              value={this.props.navigation.getParam('userName')}
            />
            <Text style={styles.txt}>이름</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(name) => this.setState({ name })}
              value={this.state.name}
            />
            <Text style={styles.txt}>나이</Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(age) => this.setState({ age })}
              value={this.state.age}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row', height: 100 }}>
          <FlowButton buttonText="취소" />
          <FlowButton onPress={this.fuck} buttonText="확인" />
        </View>
      </View >

    );


  }
}

const styles = StyleSheet.create({
  confirmBtnStyle: {
    height: 48,
    backgroundColor: "#2cdc70"
  },
  cancelBtnStyle: {
    height: 48,
    backgroundColor: "#aaaaaa"
  },
  cardTop: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16
  },
  cardMiddle: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16
  },
  txt: {
    // fontFamily: "NotoSansCJKkr",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgb(153, 153, 153)",
    marginTop: 24

  },
  txtStyle: {
    height: 40
  },
  inputStyle: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(204, 204, 204)",
    marginBottom: 24
  },
  container: {
    height: '100%',
    backgroundColor: 'rgb(247, 250, 250)',
    justifyContent: 'space-between',


  },
  layer: {
    width: 178,
    height: 54,

    // fontFamily: "NotoSansCJKkr",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "rgb(18, 18, 18)",
    marginTop: 90
  }

});
