import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions, TextInput, View } from 'react-native';
import { Fonts } from '../../Fonts'
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
      text: "",
      email: "",
      isTextValid:false,
    }

  }

  render() {
    return (

      <View>
        <TextInput
          style={[styles.inp, this.props.style, {
            borderBottomColor: this.state.isTextValid ? "rgb(37, 196, 99)" : "rgb(244, 39, 66)"
          }]}
          onChangeText={(text) => this.validate(text)}
          value={this.state.text}
        />
        <Text style={[this.props.style, styles.inpTxt, { fontFamily: Fonts.NotoSansCJKkrReg }, {
          color: this.state.isTextValid ? "rgb(37, 196, 99)" : "rgb(244, 39, 66)"
        }]}>{NOSTRING}</Text>
      </View>

    );
  }
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ text: text, isTextValid: false })
    } else {
      this.setState({ text: text, isTextValid: true })
    }
  }
}
const NOSTRING = "한글,영문만 입력가능합니다. (2~6자)";
const styles = StyleSheet.create({
  inp: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(244, 39, 66)",
    marginBottom: 0
  },
  inpTxt: {
    // fontFamily : 'NotoSansCJKkr-Regular',
    marginTop: 5,
    fontSize: 11,
    color: 'rgb(244, 39, 66)',

  }
})