import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Card from '../component/Card';

const teamCreate = require('../../assets/img/cardBackground/teamCreate.png');
const teamSearch = require('../../assets/img/cardBackground/teamSearch.png');

export default class Page1 extends Component {

    componentWillMount() {
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5'}}>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 91, marginBottom: 28}}>
                    <Text style={{fontSize: 28, textAlign: 'center'}}>
                        나와 <Text style={{color: '#2fd278'}}>함께할 팀</Text>을{'\n'}
                        찾아보세요!
                    </Text>
                </View>
                <Card>
                    <ImageBackground source={teamCreate} style={{width: 305, height: 140}}>
                        <Text>Inside</Text>
                    </ImageBackground>
                </Card>

                <Card>
                    <View style={{backgroundImage: {teamSearch}}}>
                        <Text>나의 팀 찾기</Text>
                    </View>
                </Card>
                <Card>
                    <View>
                        <Text>
                            팀 만들기
                        </Text>
                    </View>
                </Card>
            </View>
        );
    }
}

