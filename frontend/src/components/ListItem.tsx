import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
// import Colors from '../config/color';
import AppText from './AppText';

function ListItem({image, title, subtitle, onPress}: any) {
  return (
    <TouchableHighlight underlayColor={'lightgray'} onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText text={title} style={styles.title} />
          <AppText text={subtitle} style={styles.subtitle} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  subtitle: {
    color: 'gray',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default ListItem;
