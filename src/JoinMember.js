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

export default class JoinMember extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
        <Text>ssss</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  }

});
