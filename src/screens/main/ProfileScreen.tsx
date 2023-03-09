import React, {useEffect, useState} from 'react';
import {AgEnum, Text} from '../../components/ui/Text';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../styles/Colors';
import {Button} from '../../components/ui/Button';
import {DataHelper} from '../../helpers/DataHelper';
import {launchImageLibrary} from 'react-native-image-picker';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';

interface IPhoto {
  uri: string;
}

const exAvatar =
  'https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png';

export const ProfileScreen = observer(() => {
  const {authStore} = useRootStore();

  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const setPhoto = () => {
    const arr = [...Array(6)].map(_ => ({uri: exAvatar}));
    setPhotos(arr);
  };

  const addPhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'mixed',
    });

    if (result.assets) {
      const addedPhotos = result.assets?.map(i => ({uri: i.uri!})) || [];
      setPhotos(prevState => [...prevState, ...addedPhotos]);

      const formData = new FormData();

      const sendFileData = result.assets.map(item => ({
        type: item.type,
        name: item.fileName,
        uri: item.uri,
      }));

      formData.append('file', sendFileData);
    }
  };

  useEffect(() => {
    setPhoto();
  }, []);

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 16}}>
        <Text style={{marginTop: 12}} align={'center'} Ag={AgEnum.SUBTITLE}>
          makarov.96
        </Text>

        <TouchableOpacity onPress={() => authStore.logout()}>
          <Text align={'right'} Ag={AgEnum.SUBTITLE}>
            Exit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.historyItem, styles.historyItemNotActive]}>
          <Image style={styles.history} source={{uri: exAvatar}} />
        </TouchableOpacity>

        <Text Ag={AgEnum.SUBTITLE}>Дизайнер</Text>

        <Button title={'Загрузить фото'} onPress={addPhoto} />
      </View>

      <View style={styles.photoContainer}>
        {photos?.map((i, index: number) => (
          <TouchableOpacity key={index}>
            <Image
              style={styles.smallImage}
              source={{
                uri: i.uri,
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  history: {
    height: 96,
    width: 96,
    borderRadius: 96 / 2,
    borderWidth: 3,
    borderColor: 'white',
  },
  historyItemContainer: {
    marginRight: 16,
  },
  historyItem: {
    height: 96,
    width: 96,
    borderRadius: 96 / 2,
  },
  historyItemActive: {
    borderColor: Colors.red,
  },
  historyItemNotActive: {
    borderColor: Colors.gray,
  },
  photoContainer: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallImage: {
    width: DataHelper.getWidth() * 0.33,
    height: DataHelper.getWidth() * 0.33,
    marginTop: DataHelper.getWidth() * 0.003,
    marginLeft: DataHelper.getWidth() * 0.003,
  },
});
