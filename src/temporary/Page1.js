import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class Page1 extends Component {

    componentWillMount() {
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#a8ffa8'}}>
                <Text>Page1</Text>
            </View>
        );
    }
}

