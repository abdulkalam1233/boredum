import {StyleSheet} from 'react-native';
import colors from 'config/color';

export default StyleSheet.create({
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
    borderRadius: '50%' as any,
    borderColor: 'black',
  },
  header: {
    fontWeight: 'bold',
    color: colors.black,
  },
});
