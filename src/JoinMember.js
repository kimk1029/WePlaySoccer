/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, TextInput, Dimensions,Image,Button,Alert} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const instructions = Platform.select({
  ios: 'IOS',
  android:
    'android'
});

const joinEmail = 'Weplay를 처음 방문하셨다면? 회원가입을 클릭하세요' 

export default class JoinMember extends Component {
  constructor(props){
    super(props);
    this.state = { 
      text: 'Useless Placeholder',
      name: '박진성',
      username : '김무열',
      age: '1989(30)'
   };
  }
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
        <Text style={styles.layer}>환영합니다.</Text>


        <View style={styles.cardTop}>
          <Text style={styles.txt}>E-Mail</Text>
          <TextInput
            style={styles.txtStyle}
            onChangeText={(text) => this.setState({text})}
            value={"kimk1029@naver.com"}
        />
       </View>


       <View style={styles.cardMiddle}>
         <Text style={styles.txt}>닉네임</Text>
         <TextInput
            style={styles.inputStyle}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
        />
        <Text style={styles.txt}>이름</Text>
         <TextInput
            style={styles.inputStyle}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
        />
        <Text style={styles.txt}>나이</Text>
         <TextInput
            style={styles.inputStyle}
            onChangeText={(age) => this.setState({age})}
            value={this.state.age}
        />

        <Button 
          title ="확인"
          onPress = {Alert.alert("222222222")}
          color ="rgb(44, 220, 112)"
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}
          />

        <Button 
          title ="취소"
          onPress = {Alert.alert("222222222")}
          color ='rgb(170, 170, 170)'
          accessibilityLabel="Learn more about this purple button"
          style={styles.button}
          />

       </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button :{
    width: 17,
    height: 48,
    borderRadius: 4,
    paddingTop: 40
  },
  cardTop:{
    backgroundColor : 'white',
    paddingLeft : 16,
    paddingRight : 16
  },
  cardMiddle:{
    marginTop: 20,
    backgroundColor : 'white',
    paddingLeft : 16,
    paddingRight : 16
  },
  txt :{
    fontFamily: "NotoSansCJKkr",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "rgb(153, 153, 153)",
    marginTop: 24
   
  },
  txtStyle:{
    height: 40
  },
  inputStyle:{
    height: 40,
    borderBottomWidth :1,
    borderBottomColor: "rgb(204, 204, 204)",
    marginBottom: 24
  },
  container: {
    backgroundColor: 'rgb(247, 250, 250)',
    flex: 1,
    flexDirection: 'column',
    paddingRight : 20,
    paddingLeft : 20
 
  },
   layer : {
    width: 178,
    height: 54,
    
    fontFamily: "NotoSansCJKkr",
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "rgb(18, 18, 18)",
    marginTop : 90
  }

});
