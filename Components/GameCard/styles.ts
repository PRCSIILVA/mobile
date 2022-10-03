import { StyleSheet } from 'react-native';
import { THEME } from '../../src/theme';

export const styles = StyleSheet.create({
  container: {
    marginRight:24,
  },
  cover:{
    width: 241,
    height: 320,
    justifyContent:'flex-end',
    borderRadius: 10,
    overflow:'hidden',
  },
  footer:{
    width:'100%',
    height: 102,
    padding: 16,
    justifyContent:'flex-end',
  },
  name:{
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD,
  },
  ads:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  }
});