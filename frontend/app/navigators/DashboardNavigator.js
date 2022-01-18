import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import postList from '../modules/post/PostList';
import profile from '../modules/profile/Profile';
import {RouteNames} from '../config/routes';
import CreatePost from '../modules/post/CreatePost';

const Tab = createBottomTabNavigator();

export const DashboardNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }}>
    <Tab.Screen
      name={RouteNames.FEEDS}
      component={postList}
      options={() => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        title: 'Home',
      })}
    />
    <Tab.Screen
      name={RouteNames.ADD_FEED}
      component={CreatePost}
      options={() => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'plus-circle';

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        title: 'Add Feed',
      })}
    />
    <Tab.Screen
      name={RouteNames.ACCOUNT}
      component={profile}
      options={() => ({
        tabBarIcon: ({focused, color, size}) => {
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
