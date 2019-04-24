import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions,TextInput } from 'react-native';
import  Button  from './component/Button';
import  Input  from './component/Input';
export default class ComponentTest extends Component {
    constructor(props){
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }

    render() {
        return (
            <View>
                <Button
                    buttonText={"확인"} type={'confirm'} ></Button>
                <Button
                    buttonText={"취소"} type={'cancel'}></Button>
                <Input></Input>
           
            </View>
        );
    }
}
