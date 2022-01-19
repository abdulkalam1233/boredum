import {yupResolver} from '@hookform/resolvers/yup';
// import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Image} from 'react-native';
import * as yup from 'yup';
import {Input} from 'react-native-elements';

import AppButton from '@components/AppButton';
import Screen from '@components/Screen';
import colors from '@config/color';
import Styles from './Styles';
import {signUpUser} from 'services/AuthService';
import Toaster from 'utils/Toaster';
import {RouteNames} from 'config/routes';

const registerUserSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

const RegisterScreen = ({navigation}: any) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  }: any = useForm({
    mode: 'onChange',
    shouldUnregister: false,
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = (data: any) => {
    signUpUser(data)
      .then(res => {
        Toaster.success({
          title: res?.data?.message ?? 'Successfully Registered',
        });
        navigation.navigate(RouteNames.LOGIN);
      })
      .catch(err => {
        Toaster.error({title: err?.message || 'Failed'});
      });
  };

  return (
    <Screen>
      <Image source={require('@assets/logo.png')} style={Styles.logo} />
      <Controller
        control={control}
        name="name"
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Name"
            leftIcon={{
              type: 'ant-design',
              name: 'user',
              color: colors.primary,
              size: 18,
            }}
            onChangeText={onChange}
            autoCompleteType={false}
            onBlur={onBlur}
            value={value}
            errorMessage={errors?.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Email"
            leftIcon={{
              type: '',
              name: 'email',
              color: colors.primary,
              size: 18,
            }}
            onChangeText={onChange}
            autoCompleteType={false}
            onBlur={onBlur}
            value={value}
            errorMessage={errors?.email?.message}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Password"
            leftIcon={{
              type: 'font-awesome',
              name: 'lock',
              color: colors.primary,
            }}
            onChangeText={onChange}
            autoCompleteType={false}
            onBlur={onBlur}
            value={value}
            secureTextEntry
            errorMessage={errors?.password?.message}
          />
        )}
        name="password"
      />
      <AppButton
        title={'Register'}
        color={colors.secondary}
        handleOnPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
};

export default RegisterScreen;
