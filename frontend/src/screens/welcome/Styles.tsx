import colors from 'config/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  authContainer: {
    alignItems: 'center',
    marginTop: '20%',
  },
  textContainer: {
    margin: 30,
  },
  text: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
