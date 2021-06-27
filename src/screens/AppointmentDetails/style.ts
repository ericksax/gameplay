import {StyleSheet} from 'react-native';
import {theme} from '../../global/styles/theme';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 234,
  },
  banerContent: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 28,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
  },
  members: {
    marginTop: 27,
    marginLeft: 24,
  },
  footer: {
    marginHorizontal: 24,
    paddingVertical: 28,
    marginBottom: getBottomSpace(),
  },
});
