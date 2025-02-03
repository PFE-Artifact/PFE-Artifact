import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './index'; 
import LoginScreen from './LoginScreen'; 
import RegisterScreen from './RegisterScreen';
import Homepage from './HomePage';
import Profile from './Profile';
import Quiz1 from './Exp1';
import LevelsScreen from './LevelsScreen ';

const Stack = createStackNavigator();

export default function TabLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Home Screen */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="HomePage" component={Homepage} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Quiz" component={Quiz1} />
      <Stack.Screen name="Levels" component={LevelsScreen} />
    </Stack.Navigator>
  );
}
