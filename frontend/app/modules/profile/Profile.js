import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoCommunityIcons from 'react-native-vector-icons/Entypo';

import Screen from '../../components/Screen';
import ListItemSeparator from '../../components/ListItemSeparator';
import colors from '../../config/color';
// import AppButton from '../../components/AppButton';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // TODO make api call for fetch user Details
    setUserDetails({
      name: 'Abdul Kalam',
      email: 'ak@gmail.com',
      profile_image: '',
    });
  }, []);

  return (
    <Screen>
      <View>
        {userDetails.profile_image ? (
          <Image
            source={{uri: userDetails.profile_image}}
            style={styles.profileImage}
          />
        ) : (
          <MaterialCommunityIcons
            name="account"
            size={70}
            style={styles.profileIcon}
          />
        )}
        <EntypoCommunityIcons
          name="edit"
          size={20}
          style={styles.editIcon}
          color={'blue'}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.header}>Name: </Text>
          <Text>{userDetails.name}</Text>
        </View>
        <ListItemSeparator />
        <View>
          <Text style={styles.header}>Email: </Text>
          <Text>{userDetails.email}</Text>
        </View>
      </View>
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  profileIcon: {
    alignSelf: 'center',
  },
  editIcon: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 60,
  },
  detailsContainer: {
    margin: 10,
  },
  profileImageContainer: {
    borderRadius: '50%',
    borderColor: 'black',
  },
  header: {
    fontWeight: 'bold',
    color: colors.black,
  },
});
