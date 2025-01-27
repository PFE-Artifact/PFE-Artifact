import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './index'; 
import LoginScreen from './LoginScreen'; 
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

export default function TabLayout() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Home Screen */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
