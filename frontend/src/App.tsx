import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import {axios} from '@utils/axios';
import {RouteNames} from '@config/routes';
import {AuthNavigator} from '@navigators/AuthNavigator';

const App = () => {
  let initialRoute: string = useSelector(
    (state: any) => state?.auth?.initialRoute,
  );
  const authToken = useSelector((state: any) => state?.auth?.authToken);

  useEffect(() => {
    if (authToken) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      initialRoute = RouteNames.HOME;
      axios.defaults.headers.common.Authorization = authToken;
    }
  }, [authToken]);
  return (
    <NavigationContainer>{AuthNavigator({initialRoute})}</NavigationContainer>
  );
};

export default App;
