import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Main from './src/Main';
import JoinMember from './src/JoinMember';
import ComponentTest from './src/ComponentTest';

const AppNavigator = createStackNavigator({
  Main: Main,
  JoinMember: JoinMember,
  ComponentTest: ComponentTest
  }, {
    initialRouteName: "Main",
    headerMode : Main
  });

export default createAppContainer(AppNavigator);