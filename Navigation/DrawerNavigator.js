import * as React from 'react';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import TabNavigator from './TabNavigator'
import Profile from '../Screens/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component{
  render(){
    return(
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Spectagram" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    )
  }
}