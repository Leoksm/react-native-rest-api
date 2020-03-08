import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159C1',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  );
}
