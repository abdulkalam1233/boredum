import {NavigationContainer} from '@react-navigation/native';
import {axios} from './app/utils/axios';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RouteNames} from './app/config/routes';

import {AuthNavigator} from './app/navigators/AuthNavigator';

const App = () => {
  let initialRoute = useSelector(state => state?.auth?.initialRoute);
  const authToken = useSelector(state => state?.auth?.authToken);

  useEffect(() => {
    if (authToken) {
      initialRoute = RouteNames.HOME;
      axios.defaults.headers.common.Authorization = authToken;
    }
  }, [authToken]);
  return (
    <NavigationContainer>{AuthNavigator({initialRoute})}</NavigationContainer>
  );
};

export default App;
