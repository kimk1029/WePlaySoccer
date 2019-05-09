import React from "react";
import {View, Text} from "react-native";
import {createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation";
import Main from './Main';
import JoinMember from './JoinMember';
import ComponentTest from './ComponentTest';
import dragTest from './component/Draggable';
import HomeNavigator from './navigator/HomeNavigator'

const AuthNavigator = createStackNavigator(
    {
        Main: Main,
        JoinMember: JoinMember,
        ComponentTest: ComponentTest,
        dragTest: dragTest
    }, {
        initialRouteName: "Main",
        headerMode: Main
    });

export default createAppContainer(
    createSwitchNavigator(
        {
            Auth: AuthNavigator,
            App: HomeNavigator
        },
        {
            initialRouteName: 'App'
        })
);