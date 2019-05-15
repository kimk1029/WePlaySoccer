import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions,View } from 'react-native';
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
      press: false
    }
  }
  render() {
    const pad = this.props.padding ? this.props.padding : 3;
    const fontSize = this.props.fontSize ? this.props.fontSize : 16;

    const btnColor = () => {
      if (this.props.type == 'cancel') {
        console.log("canc222el");
        return '#f74b41';
      } else {
        return '#42f77b';
      }
    }

    return (
      <View style={styles.flowView}>
        <TouchableOpacity
          style={[styles.button, { padding: pad }, this.props.style, { backgroundColor: '#f74b41' }]}
       
          onPress={this.props.onPress}>
          <Text style={[styles.btnTxt, { fontSize: fontSize }]}>
           취소
          </Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { padding: pad }, this.props.style, { backgroundColor: '#42f77b' }]}
        
          onPress={this.props.onPress}>
          <Text style={[styles.btnTxt, { fontSize: fontSize }]}>
            확인
          </Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flowView:{
    width: '100%', 
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    flex:1,
    flexDirection:'row'
  },
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