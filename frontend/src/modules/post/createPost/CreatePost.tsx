import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as yup from 'yup';

import AppButton from '@components/AppButton';
import FormErrorMessage from '@components/FormErrorMessage';
import Screen from '@components/Screen';
import colors from '@config/color';
import Styles from './Styles';

const registerUserSchema = yup
  .object({
    blog: yup.string().required('Text is required'),
  })
  .required();

const CreatePost = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    shouldUnregister: false,
    resolver: yupResolver(registerUserSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <Screen>
      <Text style={Styles.title}>Create Post</Text>
      <Controller
        control={control}
        // error={errors?.name as string}
        name="blog"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[Styles.textInput]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Enter the text"
            textAlignVertical={'top'}
            multiline={true}
            maxLength={500}
          />
        )}
      />
      {errors?.blog && <FormErrorMessage error={errors?.blog?.message} />}
      <View style={Styles.postButton}>
        <AppButton
          title={'Post'}
          color={colors.secondary}
          handleOnPress={handleSubmit(onSubmit)}
        />
      </View>
    </Screen>
  );
};

export default CreatePost;
