import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({imageUris = [], onAddImage, onRemoveImage}) => {
  const scrollRef = React.useRef();

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        onContentSizeChange={() => scrollRef?.current?.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri, index) => (
            <View style={styles.input} key={index}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(index)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  input: {
    marginRight: 10,
  },
});

export default ImageInputList;
