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
import Toaster from 'utils/Toaster';
import {ActivityIndicator} from 'react-native';

const App = () => {
  const initialRoute = useSelector((state: any) => state?.auth?.initialRoute);
  const dispatch = useDispatch();

  const checkTokenExists = async () => {
    try {
      const authToken = await Storage.getData(StorageKeys.AUTH_KEY);
      if (authToken) {
        axios.defaults.headers.common.Authorization = authToken;
        await dispatch({
          type: SET_LOGIN_AUTH,
          payload: {
            authToken: authToken,
            oauth: null,
            initialRoute: RouteNames.HOME,
          },
        });
      } else {
        await dispatch({
          type: SET_LOGIN_AUTH,
          payload: {
            authToken: '',
            oauth: null,
            initialRoute: RouteNames.WELCOME,
          },
        });
      }
    } catch (e) {
      Toaster.error({title: e.message});
    }
  };

  useEffect(() => {
    checkTokenExists();
  });

  return (
    <>
      {initialRoute ? (
        <NavigationContainer>
          {AuthNavigator({initialRoute})}
        </NavigationContainer>
      ) : (
        <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
      )}
      <Toast />
    </>
  );
};

export default App;
