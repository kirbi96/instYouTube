import React from 'react';
import {Screens} from '../screens/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/main/HomeScreen';
import {SearchScreen} from '../../screens/main/SearchScreen';
import {IconSvgBottomHome} from '../../assets/bottomtab/IconSvgBottomHome';
import {IconSvgBottomSearch} from '../../assets/bottomtab/IconSvgBottomSearch';
import {IconSvgBottomHomeActive} from '../../assets/bottomtab/IconSvgBottomHomeActive';
import {IconSvgBottomAdd} from '../../assets/bottomtab/IconSvgBottomAdd';
import {IconSvgBottomLikes} from '../../assets/bottomtab/IconSvgBottomLikes';
import {VideoScreen} from '../../screens/main/VideoScreen';
import {NotificationScreen} from '../../screens/main/NotificationScreen';
import {ProfileScreen} from '../../screens/main/ProfileScreen';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={Screens.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <IconSvgBottomHomeActive />
            ) : (
              <IconSvgBottomHome />
            );
          },
        }}
      />
      <Tab.Screen
        name={Screens.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomSearch />;
          },
        }}
      />
      <Tab.Screen
        name={Screens.VIDEO}
        component={VideoScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomAdd />;
          },
        }}
      />

      <Tab.Screen
        name={Screens.NOTIFICATION}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomLikes />;
          },
        }}
      />

      <Tab.Screen
        name={Screens.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomHome />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
