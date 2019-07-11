import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Tab1 from '../temporary/Page1'
import Tab2 from '../temporary/Page2'
import Tab3 from '../temporary/Page1'
import Tab4 from '../temporary/Page2'
import Tab5 from '../temporary/Page1'
// import TBIcon from '../../assets/img/tabBarIcons/TabBarIcon';

const homeIcon = require('../../assets/img/tabBarIcons/TabBarIconHome.png')
const searchIcon = require('../../assets/img/tabBarIcons/TabBarIconSearch.png')
const alarmIcon = require('../../assets/img/tabBarIcons/TabBarIconAlarm.png')
const alarm2Icon = require('../../assets/img/tabBarIcons/TabBarIconAlarm2.png')
const menuIcon = require('../../assets/img/tabBarIcons/TabBarIconMenu.png')

const HomeNavigator = createBottomTabNavigator({
  tab1: {
    screen: Tab1,
    navigationOptions: {
      title: 'Home',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          style={{ width: 48, height: 32 }}
          source={homeIcon} />)
      }
    }
  },
  tab2: {
    screen: Tab2,
    navigationOptions: {
      title: 'Search',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          style={{ width: 48, height: 32 }}
          source={searchIcon} />)
      }
    }
  },
  tab3: {
    screen: Tab3,
    navigationOptions: {
      title: 'Alarm',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          style={{ width: 48, height: 32 }}
          source={alarmIcon} />)
      }
    }
  },
  tab4: {
    screen: Tab4,
    navigationOptions: {
      title: 'Alarm2',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          style={{ width: 48, height: 32 }}
          source={alarm2Icon} />)
      }
    }
  },
  tab5: {
    screen: Tab5,
    navigationOptions: {
      title: 'Menu',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          style={{ width: 48, height: 32 }}
          source={menuIcon} />)
      }
    }
  }
},
{
  initialRouteName: 'tab1',
  tabBarOptions: {
    activeTintColor: '#2fd278',
    activeBackgroundColor: '#ffffff',
    labelStyle: {
      fontSize: 12
    },
    style: {
      height: 52,
      backgroundColor: '#ffffff'
    }
  },
  navigationOptions: ({ navigation }) => (console.log(navigation))
}
)

export default HomeNavigator
