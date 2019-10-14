import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Fonts } from '../../Fonts';

const NO_EMAIL = '올바른 이메일 형식이 아닙니다.';
const VALIDATE_COLOR = 'rgb(244, 39, 66)';
const CONFIRM_COLOR = 'rgb(37, 196, 99)';

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
      text: '',
      email: '',
      isTextValid: false,
    };
  }

  validate = text => {
    // eslint-disable-next-line no-useless-escape
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ text, isTextValid: false });
    } else {
      this.setState({ text, isTextValid: true });
    }
  };

  render() {
    const { style } = this.props;
    const { isTextValid, text } = this.state;

    return (
      <View>
        <TextInput
          style={[styles.inp, style, { borderBottomColor: isTextValid ? CONFIRM_COLOR : VALIDATE_COLOR }]}
          onChangeText={text => this.validate(text)}
          value={text}
        />
        <Text
          style={[
            style,
            styles.inpTxt,
            { fontFamily: Fonts.NotoSansCJKkrReg, color: isTextValid ? CONFIRM_COLOR : VALIDATE_COLOR },
          ]}
        >
          {NO_EMAIL}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inp: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(244, 39, 66)',
    marginBottom: 0,
  },
  inpTxt: {
    // fontFamily : 'NotoSansCJKkr-Regular',
    marginTop: 5,
    fontSize: 11,
    color: 'rgb(244, 39, 66)',
  },
});
