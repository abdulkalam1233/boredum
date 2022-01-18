import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../config/color';

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

export default function AppButton(props) {
  const {title, handleOnPress, color, style} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      touchSoundDisabled={true}
      style={[
        styles.button,
        {
          backgroundColor: Colors[color] ?? color,
        },
        style,
      ]}
      onPress={handleOnPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
