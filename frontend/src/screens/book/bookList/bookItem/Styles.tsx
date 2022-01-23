import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    padding: 10,
  },
  imageContainer: {
    marginTop: 10,
    width: 150,
    height: 150,
    // borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
  },
  image: {
    width: 130,
    height: 130,
    alignSelf: 'center',
  },
  bookName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    // alignSelf:'center'
  },
});

export default Styles;
