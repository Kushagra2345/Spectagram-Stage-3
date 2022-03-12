import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import DrawerNavigator from './Navigation/DrawerNavigator'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './Navigation/TabNavigator'

export default class App extends React.Component{
  render(){
    return(
     <NavigationContainer>
      <DrawerNavigator/>
     </NavigationContainer>
    )
  }
}
