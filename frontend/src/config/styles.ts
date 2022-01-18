import {Platform} from 'react-native';
import Colors from './color';

export const DefaultStyles = {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  colors: Colors,
};
