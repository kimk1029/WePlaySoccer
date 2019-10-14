import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './component/Button';
import Input from './component/Input';
import Dropdown from './component/Dropdown';
import FlowBtn from './component/FlowBtn';

export default class ComponentTest extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Button
            buttonText="확인"
            type="confirm"
            style={styles.btnStyle}
            onPress={() => navigation.navigate('dragTest')}
          />
          <Button buttonText="취소" type="cancel" style={styles.btnStyle} />
        </View>
        <Input style={styles.iptStyle} />
        <Dropdown />
        <FlowBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnStyle: {
    width: 80,
  },
  iptStyle: {
    marginLeft: 20,
    width: 335,
    height: 40,
  },
});
