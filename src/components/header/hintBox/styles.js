import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../../theme';
import {getDimensions, moderateScale} from '../../../utils';

export const styles = StyleSheet.create({
  hintBox: {
    position: 'absolute',
    top: moderateScale(35),
    right: moderateScale(-1),
    padding: moderateScale(10),
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
    borderColor: Colors.BLACK,
    height: moderateScale(150),
    width: moderateScale(getDimensions().width - 98),
    backgroundColor: Colors.WHITE,
  },
  itemBox: {
    paddingVertical: moderateScale(5),
  },
  title: {
    color: Colors.BLACK,
    fontSize: moderateScale(16),
    fontFamily: FontFamily.TitilliumWebRegular,
  },
  separator: {
    height: moderateScale(5),
  },
});
