import Toast from 'react-native-toast-message';

type paramsType = {
  title: string;
  subtitle?: string;
  position?: string | undefined;
  visibilityTime?: number;
};

export default class Toaster {
  static success({
    title,
    subtitle,
    position = 'top',
    visibilityTime = 1000,
  }: paramsType) {
    Toast.show({
      type: 'success',
      position: position as any,
      text1: title,
      text2: subtitle,
      visibilityTime,
    });
  }

  static error({
    title,
    subtitle,
    position = 'top',
    visibilityTime = 1000,
  }: paramsType) {
    Toast.show({
      type: 'error',
      position: position as any,
      text1: title,
      text2: subtitle,
      visibilityTime,
    });
  }
}
