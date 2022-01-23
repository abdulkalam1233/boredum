import React from 'react';
import {View, Text, Image} from 'react-native';
import {BookItemMapping} from 'services/serviceMappers/BookMapper';
import styles from './Styles';

const BookItem = ({item}: {item: BookItemMapping}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {item.image_uri ? (
          <Image source={{uri: item.image_uri ?? ''}} style={styles.image} />
        ) : (
          <Image
            source={require('@assets/book.jpg')}
            style={styles.image}
            resizeMode={'contain'}
          />
        )}
      </View>
      <Text style={styles.bookName}>{item.name}</Text>
      <View style={styles.detailsContainer}>
        <View>
          <Text>{item.author}</Text>
          <Text>Downloads: {item.downloads}</Text>
        </View>
        <View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookItem;
