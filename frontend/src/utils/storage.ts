import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  static storeData = async (key: string, value: string | object) => {
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

  static getObjectData = async (key: string) => {
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

  static getData = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      throw e;
    }
  };
}
