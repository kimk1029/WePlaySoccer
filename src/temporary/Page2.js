import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Page1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#b9fffc' }}>
        <Text>Page2</Text>
      </View>
    );
  }
}
