import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './stack/MainStack';
import {AuthStack} from './stack/AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Navigator = () => {
  let isAuth = false;

  const checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');

      if (value !== null) {
        isAuth = true;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
