import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default class FlowBtn extends Component {
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
    const { padding = 3, fontSize = 16, type, onPress, style } = this.props;

    const btnColor = () => {
      if (type === 'cancel') {
        console.log('canc222el');
        return '#f74b41';
      }
      return '#42f77b';
    };

    return (
      <View style={styles.flowView}>
        <TouchableOpacity style={[styles.button, style, { backgroundColor: '#f74b41', padding }]} onPress={onPress}>
          <Text style={[styles.btnTxt, { fontSize }]}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, style, { backgroundColor: '#42f77b', padding }]} onPress={onPress}>
          <Text style={[styles.btnTxt, { fontSize }]}>확인</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flowView: {
    backgroundColor: 'green',
    width: '100%',
    height: 50,
    alignItems: 'center',

    justifyContent: 'flex-end',
    bottom: 0,
    flex: 1,
  },
  button: {
    position: 'absolute',
    borderRadius: 3,
    marginLeft: 5,
    alignItems: 'center',
  },
  btnTxt: {
    color: '#000000',
  },
});
