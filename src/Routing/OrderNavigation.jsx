import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ordersreen from '../pages/Ordersreen';

 // Adjust the path according to your project structure

const Stack = createStackNavigator();

const OrderNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Order" component={Ordersreen} options={{ headerShown: false }}/>
     
    </Stack.Navigator>
  );
};

export default OrderNavigation;
