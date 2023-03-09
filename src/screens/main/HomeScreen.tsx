import React from 'react';
import {IconSvgPlus} from '../../assets/icons/IconSvgPlus';
import {IconSvgFavorite} from '../../assets/icons/IconSvgFavorite';
import {IconSvgMessage} from '../../assets/icons/IconSvgMessage';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AgEnum, Text} from '../../components/ui/Text';
import {Colors} from '../../styles/Colors';
import {TextHelper} from '../../helpers/TextHelper';
import {PostCard} from '../../components/PostCard';
import {HistoryData} from '../../modules/history/HistoryData';
import {HistoryHelper} from '../../helpers/HistoryHelper';
import {IHistory} from '../../types/HistoryTypes';

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.topContainer}>
        <Text Ag={AgEnum.H1}>RU</Text>
        {/*<IconSvgLogo />*/}
        <View style={styles.topContainerIcons}>
          <TouchableOpacity style={{marginRight: 20}}>
            <IconSvgPlus />
          </TouchableOpacity>

          <TouchableOpacity style={{marginRight: 20}}>
            <IconSvgFavorite />
          </TouchableOpacity>

          <TouchableOpacity>
            <IconSvgMessage />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <ScrollView
          style={{marginTop: 12}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {HistoryHelper.getHistory(HistoryData).map(
            (item: IHistory, index) => (
              <View
                style={[
                  styles.historyItemContainer,
                  index === 0 && {marginLeft: 8},
                ]}
                key={item.id}>
                <TouchableOpacity
                  style={[
                    styles.historyItem,
                    item.active
                      ? styles.historyItemActive
                      : styles.historyItemNotActive,
                  ]}>
                  <Image style={styles.history} source={{uri: item.avatar}} />
                </TouchableOpacity>
                <Text Ag={AgEnum.SUBTITLE} align={'center'}>
                  {TextHelper.getUserHistoryName(item.name)}
                </Text>
              </View>
            ),
          )}
        </ScrollView>

        {[...Array(10)].map((_, index) => (
          <PostCard key={index} />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  topContainerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  history: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    borderWidth: 3,
    borderColor: 'white',
  },
  historyItemContainer: {
    marginRight: 16,
  },
  historyItem: {
    height: 66,
    width: 66,
    borderRadius: 66,
    borderWidth: 3,
  },
  historyItemActive: {
    borderColor: Colors.red,
  },
  historyItemNotActive: {
    borderColor: Colors.gray,
  },
});
