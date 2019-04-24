import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text,Dimensions, TextInput} from 'react-native';
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
        text : "",
        checkEmail : false
    }
    this.checkInput();
  }

  render() {
    return (
      <TextInput
        style={styles.inp}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
  checkInput(){
     alert(this.setState());
  }
}

const styles = StyleSheet.create({
  inp:{
    height: 40,
    borderBottomWidth :1,
    borderBottomColor: "rgb(204, 204, 204)",
    marginBottom: 24
  },
  btnTxt : {
    color: '#000000',
  }
})