import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Band from '../pages/Band';

import { RootStackParams } from './RootStackParams';

const Stack = createNativeStackNavigator<RootStackParams>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Band"
          component={Band}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;