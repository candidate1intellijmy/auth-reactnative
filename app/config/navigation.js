import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from '../views/Home';
import About from '../views/About';

export const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: "#2EC4B6",
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 22,
      padding: 12
    }
  }
});