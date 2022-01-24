import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
// import EntypoCommunityIcons from 'react-native-vector-icons/Entypo';

import Screen from '@components/Screen';
import ListItemSeparator from '@components/ListItemSeparator';
import Styles from './Style';
import {Avatar} from 'react-native-elements';
import {getProfileDetails} from 'services/MeService';
import Toaster from '../../utils/Toaster';

const Profile = () => {
  const [userDetails, setUserDetails] = useState<any>({});
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    // TODO make api call for fetch user Details
    getProfileDetails()
      .then((res: any) => {
        setUserDetails(res.data);
        // console.log(res)
      })
      .catch(e => {
        Toaster.error(e?.message ?? 'Failed to fetch user details');
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <Screen>
      <View>
        {userDetails?.profileImage ? (
          <Avatar
            size={64}
            rounded
            source={{uri: userDetails?.profileImage}}
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
      {loader && <ActivityIndicator size={'large'} />}
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
