import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { FONTS } from '../../../assets/fonts';

export const styles = StyleSheet.create({
    buttonStyle: {
      backgroundColor: Colors.PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 28,
      paddingVertical: 10,
      borderRadius: 10,
      width: '100%',
    },
    titleStyle: {
      color: Colors.WHITE,
      textAlign: 'center',
      fontSize:27,
      fontFamily:FONTS.Regular
    },
  });
