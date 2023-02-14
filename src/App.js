import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='PrimaryScreen' component={Primary} />
        <Tab.Screen name='SecondaryScreen' component={Secondary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




