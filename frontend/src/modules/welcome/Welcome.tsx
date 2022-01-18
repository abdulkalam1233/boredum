import React from 'react';
import {Image, Text, View} from 'react-native';
import AppButton from '@components/AppButton';
import Screen from '@components/Screen';
import colors from '@config/color';
import {RouteNames} from '@config/routes';
import Styles from './Styles';

const welcome = ({navigation}: any) => {
  return (
    <Screen>
      <Image source={require('@assets/logo.png')} />
      <View style={Styles.textContainer}>
        <Text style={Styles.text}>
          Welcome to Boredom!! Find peoples boring content. I hope You will be
          bored so much.
        </Text>
      </View>
      <View style={Styles.authContainer}>
        <AppButton
          title="Login"
          color={colors.primary}
          handleOnPress={() => navigation.navigate(RouteNames.LOGIN)}
        />
        <AppButton
          title="Register"
          color={colors.secondary}
          handleOnPress={() => navigation.navigate(RouteNames.REGISTER)}
        />
      </View>
    </Screen>
  );
};

export default welcome;
