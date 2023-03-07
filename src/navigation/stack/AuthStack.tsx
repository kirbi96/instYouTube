import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../screens/Screens';
import {AuthScreen} from '../../screens/auth/AuthScreen';
import {RegistrationScreen} from '../../screens/auth/RegistrationScreen';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.AUTH} component={AuthScreen} />
      <Stack.Screen
        name={Screens.REGISTRATION}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
};
