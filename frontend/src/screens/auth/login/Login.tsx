import React from 'react';
import {Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {Input} from 'react-native-elements';

import AppButton from '@components/AppButton';
import Screen from '@components/Screen';
import colors from '@config/color';
import {UPDATE_USER_INFO} from '@store/constants';
import {RouteNames} from '@config/routes';
import styles from './Styles';

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export default function LoginScreen({navigation}: any) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  // const userInfo = useSelector(state => state.auth.userInfo);

  const onSubmit = (data: any) => {
    dispatch({type: UPDATE_USER_INFO, payload: {data}});
    navigation.navigate(RouteNames.HOME);
  };

  return (
    <Screen>
      <Image source={require('@assets/logo.png')} style={styles.logo} />
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
        title={'Login'}
        color={colors.primary}
        handleOnPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
}
