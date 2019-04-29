import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions, Picker } from 'react-native';
export default class Dropdown extends Component {
  /**
   * 
   * @param padding
   * @param fontSize
   * @param buttonText
   * @param onPress
   */
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  updateUser = (user) => {
    this.setState({ user: user })
  }
  isYear = () => {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
    }
  }

  render() {


    return (
      <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
        <Picker.Item label="Steve" value="steve" />
        <Picker.Item label="Ellen" value="ellen" />
        <Picker.Item label="Maria" value="maria" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    color: '#000000',
  }
})