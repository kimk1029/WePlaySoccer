import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Tab1 from '../temporary/Page1';
import Tab2 from '../temporary/Page2';

const homeIcon = require('../../assets/img/tabBarIcons/TabBarIconHome.png');
const searchIcon = require('../../assets/img/tabBarIcons/TabBarIconSearch.png');
const alarmIcon = require('../../assets/img/tabBarIcons/TabBarIconAlarm.png');
const alarm2Icon = require('../../assets/img/tabBarIcons/TabBarIconAlarm2.png');
const menuIcon = require('../../assets/img/tabBarIcons/TabBarIconMenu.png');

const TabBarIcon = iconSource => {
  return <Image style={{ width: 48, height: 32 }} source={iconSource} />;
};

const HomeNavigator = createBottomTabNavigator(
  {
    tab1: {
      screen: Tab1,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: TabBarIcon(homeIcon),
      },
    },
    tab2: {
      screen: Tab2,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: TabBarIcon(searchIcon),
      },
    },
    tab3: {
      screen: Tab1,
      navigationOptions: {
        title: 'Alarm',
        tabBarIcon: TabBarIcon(alarmIcon),
      },
    },
    tab4: {
      screen: Tab2,
      navigationOptions: {
        title: 'Alarm2',
        tabBarIcon: TabBarIcon(alarm2Icon),
      },
    },
    tab5: {
      screen: Tab1,
      navigationOptions: {
        title: 'Menu',
        tabBarIcon: TabBarIcon(menuIcon),
      },
    },
  },
  {
    initialRouteName: 'tab1',
    tabBarOptions: {
      activeTintColor: '#2fd278',
      activeBackgroundColor: '#ffffff',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        height: 52,
        backgroundColor: '#ffffff',
      },
    },
    navigationOptions: ({ navigation }) => console.log(navigation),
  }
);

export default HomeNavigator;
