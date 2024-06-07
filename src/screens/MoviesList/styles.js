import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';
import {moderateScale, verticalScale} from '../../utils';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(8),
    backgroundColor: Colors.BLACK,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  listContainer: {
    backgroundColor: Colors.BLACK,
    position: 'relative',
    top: verticalScale(70),
    paddingBottom: moderateScale(90),
  },
  separator: {
    height: moderateScale(30),
  },
  coloumGap: {
    columnGap: moderateScale(12),
  },
});
