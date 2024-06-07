import {StyleSheet} from 'react-native';
import {getDimensions, moderateScale} from '../../../utils';
import {Colors} from '../../../theme';

export const styles = StyleSheet.create({
  input: {
    borderRadius: moderateScale(5),
    height: moderateScale(40),
    paddingHorizontal: moderateScale(10),
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
    minWidth: moderateScale(getDimensions().width - 100),
    marginLeft: moderateScale(15),
  },
});
