import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
      labeled={false}
        activeColor="tomato"
        inactiveColor="grey"
        barStyle={{
          backgroundColor: '#2a2a2a',
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 30,
          borderTopRightRadius:30
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'CreatePost') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Feed') {
              iconName = focused ? 'create' : 'create-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
    );
  }
}
