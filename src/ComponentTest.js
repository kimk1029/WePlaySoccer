import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions,TextInput ,Picker} from 'react-native';
import  Button  from './component/Button';
import  Input  from './component/Input';
export default class ComponentTest extends Component {
    constructor(props){
        super(props);
        this.state = { text: 'Useless Placeholder',language:'' };
    }

    render() {
        return (
            <View style={{marginTop : 50}}>
                <Button
                    buttonText={"확인"} type={'confirm'} style={styles.btnStyle}></Button>

                <Button
                    buttonText={"취소"} type={'cancel'} style={styles.btnStyle}></Button>
                    
                <Input style={styles.iptStyle}></Input>
                {/* <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
 >
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btnStyle :{
        width : 80
    },
    iptStyle :{
        marginLeft : 20,
        width : 335,
        height : 40
    }
})