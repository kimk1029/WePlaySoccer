import React, { Component } from 'react';
import { StyleSheet, Picker } from 'react-native';

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
      user: '',
    };
  }

  updateUser = user => {
    this.setState({ user });
  };

  isYear = () => {
    for (let index = 1950; index < 2019; index++) {
      // const element = array[index];
    }
  };

  render() {
    const { user } = this.state;

    return (
      <Picker selectedValue={user} onValueChange={this.updateUser}>
        <Picker.Item label="1990" value="1990" />
        <Picker.Item label="1989" value="1989" />
        <Picker.Item label="1988" value="1988" />
        <Picker.Item label="1987" value="1987" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 3,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#000000',
  },
});
