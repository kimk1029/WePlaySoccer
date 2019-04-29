import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './src/Main';
import JoinMember from './src/JoinMember';
import ComponentTest from './src/ComponentTest';
import dragTest from './src/component/Draggable';

const AppNavigator = createStackNavigator({
  Main: Main,
  JoinMember: JoinMember,
  ComponentTest: ComponentTest,
  dragTest: dragTest
  }, {
    initialRouteName: "Main",
    headerMode : Main
  });

export default createAppContainer(AppNavigator);