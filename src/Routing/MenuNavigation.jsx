import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../pages/LoginPage';

 // Adjust the path according to your project structure

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={LoginPage} options={{ headerShown: false }} />
     
    </Stack.Navigator>
  );
};

export default HomeNavigation;
