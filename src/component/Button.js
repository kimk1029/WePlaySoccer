import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Button extends Component {
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
      press: false,
    };
  }

  render() {
    const { padding = 3, fontSize = 16, type, style, onPress, buttonText } = this.props;
    const { press } = this.state;

    const btnColor = () => {
      if (type === 'cancel') {
        return '#f74b41';
      }
      return '#42f77b';
    };

    return (
      <TouchableOpacity
        style={[styles.button, style, { padding, backgroundColor: btnColor() }]}
        onPressIn={() => this.setState({ press: true })}
        onPressOut={() => this.setState({ press: false })}
        onPress={onPress}
      >
        <Text style={[styles.btnTxt, { fontSize }]}>{buttonText}</Text>
        <Text>{press}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#000000',
  },
});
