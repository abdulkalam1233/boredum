import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {axios} from '@utils/axios';
import {RouteNames} from '@config/routes';
import {AuthNavigator} from '@navigators/AuthNavigator';
import Toast from 'react-native-toast-message';
import Storage from 'utils/storage';
import {StorageKeys} from 'config/mapping';
import {SET_LOGIN_AUTH} from 'store/constants';

const App = () => {
  const initialRoute = useSelector((state: any) => state?.auth?.initialRoute);
  const dispatch = useDispatch();

  useEffect(() => {
    Storage.getData(StorageKeys.AUTH_KEY).then((authToken: any) => {
      if (authToken) {
        axios.defaults.headers.common.Authorization = authToken;
        dispatch({
          type: SET_LOGIN_AUTH,
          payload: {
            authToken: authToken,
            oauth: null,
            initialRoute: RouteNames.HOME,
          },
        });
      }
    });
  });

  return (
    <>
      <NavigationContainer>{AuthNavigator({initialRoute})}</NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
