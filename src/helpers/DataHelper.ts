import {Dimensions} from 'react-native';

export class DataHelper {
  static getWidth = () => Dimensions.get('window').width;
}
