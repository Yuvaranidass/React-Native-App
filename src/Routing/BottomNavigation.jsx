import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigation from './HomeNavigation';
import OrderNavigation from './OrderNavigation';
import ServiceNavigation from './ServiceNavigation';
import MenuNavigation from './MenuNavigation';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#215575"
      inactiveColor="#17bfff"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              color={focused ? "#215575" : "#17bfff"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list-alt"
              color={focused ? "#215575" : "#17bfff"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServiceNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="cogs"
              color={focused ? "#215575" : "#17bfff"}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="bars"
              color={focused ? "#215575" : "#17bfff"}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
