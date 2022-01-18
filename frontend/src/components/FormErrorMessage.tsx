import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Colors from '@config/color';

interface IProp {
  error: string;
}

const FormErrorMessage = ({error}: IProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.error,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  container: {
    marginHorizontal: 10,
  },
});

export default FormErrorMessage;
