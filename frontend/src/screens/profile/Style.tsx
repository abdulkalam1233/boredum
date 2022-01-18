import {StyleSheet} from 'react-native';
import colors from 'config/color';

export default StyleSheet.create({
  profileImage: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    color: colors.white,
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
