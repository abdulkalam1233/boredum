import {yupResolver} from '@hookform/resolvers/yup';
// import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {Input} from 'react-native-elements';

import AppButton from '@components/AppButton';
import Screen from '@components/Screen';
import colors from '@config/color';
// import Styles from './Styles';
import Toaster from 'utils/Toaster';
import {RouteNames} from 'config/routes';
import {addBookService} from 'services/BookService';

const registerUserSchema = yup
  .object({
    name: yup.string().required('Name is required'),
    author: yup.string().required(),
    price: yup.number().required(),
  })
  .required();

const CreateBook = ({navigation}: any) => {
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
    addBookService(data)
      .then(res => {
        Toaster.success({
          title: res?.data?.message ?? 'Book added',
        });
        navigation.navigate(RouteNames.BOOKS.LIST);
      })
      .catch(err => {
        Toaster.error({title: err?.message || 'Failed to add book'});
      });
  };

  return (
    <Screen>
      <Controller
        control={control}
        name="name"
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Name"
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
            placeholder="Author"
            onChangeText={onChange}
            autoCompleteType={false}
            onBlur={onBlur}
            value={value}
            errorMessage={errors?.author?.message}
          />
        )}
        name="author"
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Price"
            onChangeText={onChange}
            autoCompleteType={false}
            onBlur={onBlur}
            value={value}
            errorMessage={errors?.price?.message}
          />
        )}
        name="price"
      />
      <AppButton
        title={'Add Book'}
        color={colors.secondary}
        handleOnPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
};

export default CreateBook;
