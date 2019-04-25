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
            <View style={{marginTop : 50}}>
                <Button
                    buttonText={"확인"} type={'confirm'} style={styles.btnStyle}></Button>

                <Button
                    buttonText={"취소"} type={'cancel'} style={styles.btnStyle}></Button>
                    
                <Input style={styles.iptStyle}></Input>
           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnStyle :{
        width : 80
    },
    iptStyle :{
        marginLeft : 90,
        width : 180
    }
})