import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
export default class Button extends Component {
/**
 *
 * @param padding
 * @param fontSize
 * @param buttonText
 * @param onPress
 */
  constructor (props) {
    super(props)
    this.state = {
      press: false
    }
  }
  render () {
    const pad = this.props.padding ? this.props.padding : 3
    const fontSize = this.props.fontSize ? this.props.fontSize : 16

    const btnColor = () => {
      if (this.props.type == 'cancel') {
        return '#f74b41'
      } else {
        return '#42f77b'
      }
    }

    return (
      <TouchableOpacity
        style={[styles.button, { padding: pad }, this.props.style, { backgroundColor: btnColor() } ]}
        onPressIn={() => this.setState({ press: true })}
        onPressOut={() => this.setState({ press: false })}
        onPress={this.props.onPress}>
        <Text style={[styles.btnTxt, { fontSize: fontSize }]}>
          {this.props.buttonText}
        </Text>
        <Text>{this.state.press}</Text>

      </TouchableOpacity>
    )
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
    color: '#000000'
  }
})
