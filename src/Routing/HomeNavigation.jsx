import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppFrontpage from '../pages/AppFrontpage';
 // Adjust the path according to your project structure

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={AppFrontpage} options={{ headerShown: false }} />
     
    </Stack.Navigator>
  );
};

export default HomeNavigation;
