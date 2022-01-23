import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import profile from '@screens/profile/Profile';
import {RouteNames} from '@config/routes';
import {BookNavigator} from './BookNavigator';
import {PostNavigator} from './PostNavigator';

const Tab = createBottomTabNavigator();

export const DashboardNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
    <Tab.Screen
      name={RouteNames.POSTS.TAB}
      component={PostNavigator}
      options={() => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'comment';

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        title: 'Posts',
      })}
    />
    <Tab.Screen
      name={RouteNames.BOOKS.TAB}
      component={BookNavigator}
      options={() => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'book';

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        title: 'Books',
      })}
    />
    <Tab.Screen
      name={RouteNames.ACCOUNT}
      component={profile}
      options={() => ({
        tabBarIcon: ({color, size}) => {
          let iconName = 'account';

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        title: 'Profile',
      })}
    />
  </Tab.Navigator>
);
