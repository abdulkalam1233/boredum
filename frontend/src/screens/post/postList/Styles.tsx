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
  searchContainerStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 10,
  },
  noRecords: {
    alignSelf: 'center',
  },
  addButtonIcon: {
    name: 'plus-circle',
    type: 'font-awesome',
    size: 15,
    color: 'white',
  },
  addButton: {
    backgroundColor: 'rgba(199, 43, 98, 1)',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 30,
  },
  addButtonContainer: {
    width: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  searchAndAdd: {flexDirection: 'row', justifyContent: 'space-between'},
});
