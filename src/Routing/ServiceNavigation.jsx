import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SellYourVehicle from '../pages/SellYourVehicle';

 // Adjust the path according to your project structure

const Stack = createStackNavigator();

const ServiceNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Service" component={SellYourVehicle} options={{ headerShown: false }} />
     
    </Stack.Navigator>
  );
};

export default ServiceNavigation;
