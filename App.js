import 'react-native-gesture-handler'; // Ensure this is at the top of the file
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/Routing/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
