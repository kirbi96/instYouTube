import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {AgEnum, Text} from '../../components/ui/Text';
import Input from '../../components/ui/Input';
import {Colors} from '../../styles/Colors';
import {Button} from '../../components/ui/Button';
import {useForm} from 'react-hook-form';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';
import {LoaderFlex} from '../../components/ui/Loader';

enum EAuthForm {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export const AuthScreen = observer(() => {
  const {authStore} = useRootStore();

  const {
    watch,
    setValue,
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const handleChange = (val: string, name: string) => {
    setValue(name, val);
  };

  const sendData = (data: any) => {
    authStore.login(data);
  };

  useEffect(() => {
    register(EAuthForm.USERNAME, {required: true});
    register(EAuthForm.PASSWORD, {required: true, minLength: 6});
  }, []);

  if (authStore.loader) {
    return <LoaderFlex />;
  }

  return (
    <View style={styles.container}>
      <Text align={'center'} style={styles.title} Ag={AgEnum.H1}>
        RUGRAM
      </Text>

      <View style={{marginTop: 32}}>
        <Input
          value={watch(EAuthForm.USERNAME)}
          placeholder={'username'}
          onChangeText={handleChange}
          inputKey={EAuthForm.USERNAME}
          error={''}
          // error={errors[EAuthForm.USERNAME]}
        />
        <Input
          value={watch(EAuthForm.PASSWORD)}
          placeholder={'password'}
          inputKey={EAuthForm.PASSWORD}
          onChangeText={handleChange}
          error={''}
          // error={errors[EAuthForm.PASSWORD]}
          marginTop={0}
        />

        <Button title={'Войти'} onPress={handleSubmit(sendData)} />
      </View>
    </View>
  );
});

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: 64,
  },
});
