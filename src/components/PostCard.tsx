import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {AgEnum, Text} from './ui/Text';
import {IconSvgPlus} from '../assets/icons/IconSvgPlus';
import {IconSvgFavorite} from '../assets/icons/IconSvgFavorite';
import {IconSvgMessage} from '../assets/icons/IconSvgMessage';

export const PostCard = () => {
  return (
    <View>
      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://yt3.ggpht.com/ytc/AKedOLSpJnXNw11fqOOzQA_866Z5yRKBON_nCjWe5o2L2A=s48-c-k-c0x00ffffff-no-rj',
            }}
          />
          <Text style={{marginLeft: 9}} Ag={AgEnum.SUBTITLE}>
            makarov.1996
          </Text>
        </View>

        <TouchableOpacity>
          <IconSvgPlus />
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg',
          }}
        />
      </View>

      <View style={styles.topContainer}>
        <View style={styles.flexRow}>
          <TouchableOpacity>
            <IconSvgFavorite />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 14}}>
            <IconSvgMessage />
          </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 11}}>
            <IconSvgPlus />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <IconSvgPlus />
        </TouchableOpacity>
      </View>

      <Text style={{marginLeft: 12}} Ag={AgEnum.SUBTITLE_STRONG}>
        100 Likes
      </Text>

      <View>
        <Text numberOfLines={2} style={{marginLeft: 12}} Ag={AgEnum.SUBTITLE}>
          <Text Ag={AgEnum.SUBTITLE_STRONG}>makarov.1996 </Text>
          Привет тут очень здорово, Привет тут очень здорово, Привет тут очень
          здорово, Привет тут очень здорово, Привет тут очень здорово, Привет
          тут очень здорово
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 16,
    paddingVertical: 9,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 375,
  },
});
