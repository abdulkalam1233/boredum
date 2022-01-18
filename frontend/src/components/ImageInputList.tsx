import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({imageUris = [], onAddImage, onRemoveImage}: any) => {
  const scrollRef: any = React.useRef();

  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        onContentSizeChange={() => scrollRef?.current?.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri: string, index: number) => (
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
