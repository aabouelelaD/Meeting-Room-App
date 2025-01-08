import {StyleSheet} from 'react-native';
import {FONTS} from '../../../assets/fonts'
import { Colors } from '../../theme/colors';
export const styles = StyleSheet.create({
  default: {
    fontFamily: FONTS.Regular,
    textAlign: 'left',
    color:Colors.WHITE
  },
  medium: {
    fontFamily: FONTS.Medium,
    textAlign: 'left',
    color:Colors.WHITE

  },
  semiBold: {
    fontFamily: FONTS.SemiBold,
    textAlign: 'left',
    color:Colors.WHITE

  },
  bold: {
    fontFamily: FONTS.Bold,
    textAlign: 'left',
    color:Colors.WHITE

  },
});
