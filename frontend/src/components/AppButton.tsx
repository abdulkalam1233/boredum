import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '@config/color';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    // height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

interface AppButtonProps {
  title: string, handleOnPress: any, color: string, style?: any
}

export default function AppButton(props: AppButtonProps) {
  const {title, handleOnPress, color, style} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      touchSoundDisabled={true}
      style={[
        styles.button,
        {
          backgroundColor: colors[color] ?? color,
        },
        style,
      ]}
      onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
