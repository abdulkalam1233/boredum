import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import * as yup from 'yup';

import AppButton from '../../components/AppButton';
import FormErrorMessage from '../../components/FormErrorMessage';
import Screen from '../../components/Screen';
import colors from '../../config/color';

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

  const onSubmit = data => console.log(data);

  return (
    <Screen>
      <Text style={styles.title}>Create Post</Text>
      <Controller
        control={control}
        error={errors?.name}
        name="blog"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[styles.textInput]}
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
      <View style={styles.postButton}>
        <AppButton
          title={'Post'}
          color={colors.secondary}
          handleOnPress={handleSubmit(onSubmit)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  textInput: {
    // height: '70%',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
  },
  postButton: {
    // position: 'fixed',
  },
});

export default CreatePost;
