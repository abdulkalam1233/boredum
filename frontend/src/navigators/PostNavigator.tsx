import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteNames} from 'config/routes';
import postList from 'screens/post/postList/PostList';
import CreatePost from 'screens/post/createPost/CreatePost';

const Stack = createNativeStackNavigator();

export const PostNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={RouteNames.POSTS.LIST}
      component={postList}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name={RouteNames.POSTS.CREATE_POST} component={CreatePost} />
  </Stack.Navigator>
);
