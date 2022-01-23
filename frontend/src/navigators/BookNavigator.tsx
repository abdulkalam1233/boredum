import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteNames} from 'config/routes';
import BookList from 'screens/book/bookList/BookList';
import CreateBook from 'screens/book/CreateBook/CreateBook';

const Stack = createNativeStackNavigator();

export const BookNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteNames.BOOKS.LIST}
      component={BookList}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={RouteNames.BOOKS.CREATE_BOOK} component={CreateBook} />
  </Stack.Navigator>
);
