import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // borderRadius: 10,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
  profileIcon: {
    alignSelf: 'center',
    marginRight: 10,
  },
  textContainer: {
    padding: 10,
    // width: 250,
    // height: 250,
  },
  userName: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
  },
});
