import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from '../config/color';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar?.currentHeight ?? 0,
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default Screen;
