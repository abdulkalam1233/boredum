import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoCommunityIcons from 'react-native-vector-icons/Entypo';

import Screen from '@components/Screen';
import ListItemSeparator from '@components/ListItemSeparator';
import Styles from './Style';

const Profile = () => {
  const [userDetails, setUserDetails] = useState<any>({});

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
            style={Styles.profileImage as any}
          />
        ) : (
          <MaterialCommunityIcons
            name="account"
            size={70}
            style={Styles.profileIcon}
          />
        )}
        <EntypoCommunityIcons
          name="edit"
          size={20}
          style={Styles.editIcon}
          color={'blue'}
        />
      </View>
      <View style={Styles.detailsContainer}>
        <View>
          <Text style={Styles.header}>Name: </Text>
          <Text>{userDetails.name}</Text>
        </View>
        <ListItemSeparator />
        <View>
          <Text style={Styles.header}>Email: </Text>
          <Text>{userDetails.email}</Text>
        </View>
      </View>
    </Screen>
  );
};

export default Profile;
