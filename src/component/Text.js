import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class TextComponent extends Component {
  /**
   *
   * @param padding
   * @param fontSize
   * @param buttonText
   * @param onPress
   */
  render() {
    const { buttonText, fontSize } = this.props;
    return <Text style={[styles.txtStyle, { fontSize }]}>{buttonText}</Text>;
  }
}

const styles = StyleSheet.create({
  txtStyle: {},
});
