/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';

export default class JoinMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      name: '',
      age: '1989(30)',
    };
  }

  render() {
    const { navigation } = this.props;
    const { name, age } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.layer}>
          환영합니다.
          {navigation.getParam('uid')}
        </Text>

        <View style={styles.cardTop}>
          <Text style={styles.txt}>E-Mail</Text>
          <TextInput
            style={styles.txtStyle}
            onChangeText={text => this.setState({ text })}
            value={navigation.getParam('email')}
          />
        </View>

        <View style={styles.cardMiddle}>
          <Text style={styles.txt}>닉네임</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={username => this.setState({ username })}
            value={navigation.getParam('userName')}
          />
          <Text style={styles.txt}>이름</Text>
          <TextInput style={styles.inputStyle} onChangeText={name => this.setState({ name })} value={name} />
          <Text style={styles.txt}>나이</Text>
          <TextInput style={styles.inputStyle} onChangeText={age => this.setState({ age })} value={age} />

          <View style={{ flexDirection: 'row' }}>
            <Button title="취소" buttonStyle={styles.cancelBtnStyle} onPress={() => navigation.navigate('Main')} />
            <Button title="확인1" buttonStyle={styles.confirmBtnStyle} onPress={() => Alert.alert(this.state)} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  confirmBtnStyle: {
    width: 147,
    height: 48,
    backgroundColor: '#2cdc70',
    borderRadius: 4,
  },
  cancelBtnStyle: {
    width: 147,
    height: 48,
    backgroundColor: '#aaaaaa',
    borderRadius: 4,
    marginRight: 18,
  },
  cardTop: {
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardMiddle: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
  },
  txt: {
    // fontFamily: "NotoSansCJKkr",
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: 'rgb(153, 153, 153)',
    marginTop: 24,
  },
  txtStyle: {
    height: 40,
  },
  inputStyle: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(204, 204, 204)',
    marginBottom: 24,
  },
  container: {
    backgroundColor: 'rgb(247, 250, 250)',
    paddingRight: 20,
    paddingLeft: 20,
  },
  layer: {
    width: 178,
    height: 54,
    // fontFamily: "NotoSansCJKkr",
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgb(18, 18, 18)',
    marginTop: 90,
  },
});
