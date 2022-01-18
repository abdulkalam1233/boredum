import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import welcomeScreen from '@modules/welcome/Welcome';
import LoginScreen from '@modules/auth/Login/Login';
import RegisterScreen from '@modules/auth/Register/Register';
import {RouteNames} from '@config/routes';
import {DashboardNavigator} from './DashboardNavigator';

const Stack = createNativeStackNavigator();

export const AuthNavigator = ({initialRoute}: any) => (
  <Stack.Navigator initialRouteName={initialRoute}>
    <Stack.Screen name={RouteNames.WELCOME} component={welcomeScreen} />
    <Stack.Screen name={RouteNames.LOGIN} component={LoginScreen} />
    <Stack.Screen name={RouteNames.REGISTER} component={RegisterScreen} />
    <Stack.Screen
      name={RouteNames.HOME}
      component={DashboardNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
