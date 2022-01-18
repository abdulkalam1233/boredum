import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Colors from '@config/color';
import AppText from './AppText';

interface IProp {
  image: any;
  title: string;
  subtitle: string;
}

function AppCard({image, title, subtitle}: IProp) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText text={title} style={styles.title} />
        <AppText text={subtitle} style={styles.subtitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subtitle: {
    color: 'green',
    fontWeight: 'bold',
  },
  title: {
    paddingBottom: 10,
  },
});

export default AppCard;
