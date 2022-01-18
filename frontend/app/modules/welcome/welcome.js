import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/AppButton';
import Screen from '../../components/Screen';
import colors from '../../config/color';
import {RouteNames} from '../../config/routes';

const welcome = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <Image source={require('../../assets/logo.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Welcome to Boredom!! Find peoples boring content. I hope You will be
          bored so much.
        </Text>
      </View>
      <View style={styles.authContainer}>
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

const styles = StyleSheet.create({
  authContainer: {
    alignItems: 'center',
    marginTop: '20%',
  },
  textContainer: {
    margin: 30,
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default welcome;
