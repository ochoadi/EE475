import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SwipeableDogProfiles from '../Components/Swipeable/SwipeableDogProfiles';
import DogProfileScreen from '../Components/Profile/DogProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SwipeableDogProfiles" component={SwipeableDogProfiles} />
        <Stack.Screen name="DogProfile" component={DogProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





