import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EMOJI_BUTTONS} from '../../config/mapping';

const EmojiButtonComponent = ({likes, dislikes, handleOnPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        touchSoundDisabled={true}
        onPress={() => handleOnPress(EMOJI_BUTTONS.DISLIKE)}>
        <View style={styles.button}>
          <Image
            source={require('../../assets/bored.png')}
            style={styles.emojiButton}
          />
          <Text style={styles.count}>{dislikes ?? 0}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        touchSoundDisabled={true}
        onPress={() => handleOnPress(EMOJI_BUTTONS.LIKE)}>
        <View style={styles.button}>
          <Image
            source={require('../../assets/in-love.png')}
            style={styles.emojiButton}
          />
          <Text style={styles.count}>{likes ?? 0}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EmojiButtonComponent;

const styles = StyleSheet.create({
  statContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  emojiButton: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
  },
  count: {
    alignSelf: 'center',
    marginRight: 50,
    marginLeft: 10,
  },
});
