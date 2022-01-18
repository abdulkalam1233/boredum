import {StyleSheet} from 'react-native';
import colors from 'config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logo: {
    width: 150,
    height: 80,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    // position: 'abso'
  },
});
