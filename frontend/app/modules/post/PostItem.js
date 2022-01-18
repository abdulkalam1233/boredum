import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EmojiButtonComponent from './EmojiButtonComponent';

const PostItem = ({
  profileImage,
  date,
  text,
  id,
  userName,
  likes,
  dislikes,
  handleOnPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image source={{uri: profileImage}} style={styles.profileImage} />
        ) : (
          <MaterialCommunityIcons
            name="account"
            size={40}
            style={styles.profileIcon}
          />
        )}
        <Text style={styles.userName} lineBreakMode={'tail'}>
          {userName}
        </Text>
        {/* <Text style={styles.userName}>{date ?? ''}</Text> */}
      </View>
      <View style={styles.textContainer}>
        <Text>{text.trim()}</Text>
      </View>
      <EmojiButtonComponent
        likes={likes}
        dislikes={dislikes}
        handleOnPress={handleOnPress}
      />
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    // borderRadius: 10,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
  profileIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  textContainer: {
    padding: 10,
    // width: 250,
    // height: 250,
  },
  userName: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
  },
});
