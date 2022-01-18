import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    if (typeof value === 'object') {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      await AsyncStorage.setItem(key, value);
    }
  } catch (e) {
    throw e;
  }
};

export const getObjectData = async key => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (result == null || result === undefined) {
      return result;
    }
    return JSON.parse(result);
  } catch (e) {
    throw e;
  }
};

export const getData = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    throw e;
  }
};
