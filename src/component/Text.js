import React, { Component } from 'react';
import { StyleSheet, Text,Dimensions, } from 'react-native';
export default class Text extends Component {
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

  render() {
    return (
     
        <Text style={[styles.txtStyle,{fontSize:fontSize}]}>
          {this.props.buttonText}
        </Text>
      
    );
  }
}

const styles = StyleSheet.create({
  txtStyle:{
    
  }
})