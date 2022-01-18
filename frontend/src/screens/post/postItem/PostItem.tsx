import React from 'react';
import {Text, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import EmojiButtonComponent from './EmojiButtonComponent';
import Styles from './Styles';

const PostItem = ({
  profileImage,
  text,
  userName,
  likes,
  dislikes,
  handleOnPress,
}: any) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.profileContainer}>
        {profileImage ? (
          <Image source={{uri: profileImage}} style={Styles.profileImage} />
        ) : (
          <MaterialCommunityIcons
            name="account"
            size={40}
            style={Styles.profileIcon}
          />
        )}
        <Text style={Styles.userName} lineBreakMode={'tail'}>
          {userName}
        </Text>
        {/* <Text style={Styles.userName}>{date ?? ''}</Text> */}
      </View>
      <View style={Styles.textContainer}>
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
