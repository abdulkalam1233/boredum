import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const ImageInput = ({imageUri, onChangeImage}: any) => {
  React.useEffect(() => {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(checkResult => {
      if (RESULTS.GRANTED !== checkResult) {
        request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
          if (RESULTS.GRANTED !== result) {
            alert('Please allow the storage permission');
          }
        });
      }
    });
  }, []);

  const handleDelete = () => {
    if (!imageUri) {
      selectImage();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete the image?', [
        {text: 'Yes', onPress: () => onChangeImage(null)},
        {text: 'No'},
      ]);
    }
  };

  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
        selectionLimit: 1,
      });

      if (result?.assets?.length) {
        onChangeImage(result.assets[0].uri);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleDelete}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera" size={30} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

export default ImageInput;
