import {yupResolver} from '@hookform/resolvers/yup';
// import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Image} from 'react-native';
import * as yup from 'yup';

import AppButton from '@components/AppButton';
import AppInputText from '@components/AppInputText';
import FormErrorMessage from '@components/FormErrorMessage';
import Screen from '@components/Screen';
import colors from '@config/color';
import Styles from './Styles';

const registerUserSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

const RegisterScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  }: any = useForm({
    mode: 'onChange',
    shouldUnregister: false,
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Screen>
      <Image source={require('@assets/logo.png')} style={Styles.logo} />
      <Controller
        control={control}
        // error={errors?.name}
        name="name"
        render={({field: {onChange, onBlur, value}}) => (
          <AppInputText
            value={value}
            onblur={onBlur}
            onChangeText={onChange}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder={'Name'}
          />
        )}
      />
      {errors?.name && <FormErrorMessage error={errors?.name?.message} />}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInputText
            // defaultValue={value}
            autoCapitalize="none"
            autoCorrect={false}
            // icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="email"
      />
      {errors?.email?.message && (
        <FormErrorMessage error={errors?.email?.message} />
      )}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <AppInputText
            autoCapitalize="none"
            autoCorrect={false}
            // icon="lock"
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
            textContentType="password"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="password"
      />
      {errors?.password?.message && (
        <FormErrorMessage error={errors?.password?.message} />
      )}
      <AppButton
        title={'Register'}
        color={colors.secondary}
        handleOnPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
};

export default RegisterScreen;
