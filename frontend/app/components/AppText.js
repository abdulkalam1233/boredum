import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {DefaultStyles} from '../config/styles';

function AppText({style, text}) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: DefaultStyles.text,
});

export default AppText;
