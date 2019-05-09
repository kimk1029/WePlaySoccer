import React, { Component } from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Tab1 from '../temporary/Page1'
import Tab2 from '../temporary/Page2'
import Tab3 from '../temporary/Page1'
import Tab4 from '../temporary/Page2'
import Tab5 from '../temporary/Page1'


const HomeNavigator = createBottomTabNavigator({
        tab1: {
            screen: Tab1,
            navigationOptions: {
                title: '일',
            }
        },
        tab2: {
            screen: Tab2,
            navigationOptions: {
                title: '이',
            }
        },
        tab3: {
            screen: Tab3,
            navigationOptions: {
                title: '삼',
            }
        },
        tab4: {
            screen: Tab4,
            navigationOptions: {
                title: '사',
            }
        },
        tab5: {
            screen: Tab5,
            navigationOptions: {
                title: '오',
            }
        },
    },
    {
        initialRouteName: 'tab1',
        tabBarOptions: {
            activeTintColor: '#ffffff',
            activeBackgroundColor: '#2183da',
        }
    }
);

export default HomeNavigator;