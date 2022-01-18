import React from 'react';
import {StyleSheet, View} from 'react-native';

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    backgroundColor: 'black',
    height: 1,
    marginVertical: 10,
  },
});

export default ListItemSeparator;
