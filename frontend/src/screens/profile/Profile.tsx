import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// import EntypoCommunityIcons from 'react-native-vector-icons/Entypo';

import Screen from '@components/Screen';
import ListItemSeparator from '@components/ListItemSeparator';
import Styles from './Style';
import {Avatar} from 'react-native-elements';

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
        {userDetails?.profile_image ? (
          <Avatar
            size={64}
            rounded
            source={{uri: userDetails?.profile_image}}
            // title="ak"
            containerStyle={Styles.profileImage}>
            <Avatar.Accessory size={23} tvParallaxProperties={undefined} />
          </Avatar>
        ) : (
          <Avatar
            size={64}
            rounded
            title={userDetails?.name?.[0] ?? 'U'}
            // title="ak"
            containerStyle={Styles.profileImage}>
            <Avatar.Accessory size={23} tvParallaxProperties={undefined} />
          </Avatar>
        )}
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
