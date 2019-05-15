import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, TextInput, Picker } from 'react-native';
import Button from './component/Button';
import Input from './component/Input';
import Dropdown from './component/Dropdown';
import Draggable from './component/Draggable';
import FlowBtn from './component/FlowBtn';
export default class ComponentTest extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder', language: '' };
    }
    render() {
        return (
            <View style={{ marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Button
                        buttonText={"확인"} type={'confirm'} style={styles.btnStyle} onPress={() => { this.props.navigation.navigate('dragTest') }}></Button>
                    <Button
                        buttonText={"취소"} type={'cancel'} style={styles.btnStyle}></Button>
                </View>
                <Input style={styles.iptStyle}></Input>
                <Dropdown></Dropdown>
                <FlowBtn></FlowBtn>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnStyle: {
        width: 80
    },
    iptStyle: {
        marginLeft: 20,
        width: 335,
        height: 40
    }
})