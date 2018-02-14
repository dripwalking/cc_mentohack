import React from 'react';
import { StyleSheet, Text, View, Platform, Image, FlatList, Alert } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import DashScreen from './components/screens/dash'
import ChatsScreen from './components/screens/chats'
import ActionsScreen from './components/screens/actions'
import SettingsScreen from './components/screens/settings'
import WizardScreen from './components/screens/wizard'
import AnswerScreen from './components/screens/answer'


const WizardStack = StackNavigator({
  Home: { screen: DashScreen },
  Wizard: { screen: WizardScreen },
  Answer: { screen: AnswerScreen },
})
  
export default TabNavigator({
    Home: { screen: WizardStack },
    Chats: { screen: ChatsScreen },
    Actions: { screen: ActionsScreen },
    Settings: { screen: SettingsScreen },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Chats') {
        iconName = `ios-chatboxes${focused ? '' : '-outline'}`;
      } else if (routeName === 'Actions') {
        iconName = `ios-bookmarks${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
});