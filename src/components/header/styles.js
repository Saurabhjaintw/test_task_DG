import {StyleSheet} from 'react-native';
import {Colors, FontFamily, FontSize} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: moderateScale(75),
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  space: {
    paddingHorizontal: moderateScale(5),
  },
  navBarBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateScale(15),
  },
  navBarTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: moderateScale(16),
    height: moderateScale(16),
  },
  searchIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  titleText: {
    fontSize: FontSize.F24,
    fontFamily: FontFamily.TitilliumWebRegular,
    color: Colors.HEADERTITLECOLOR,
    marginLeft: moderateScale(15),
  },
  crossIcon: {
    fontSize: FontSize.F32,
    fontFamily: FontFamily.TitilliumWebRegular,
    color: Colors.HEADERTITLECOLOR,
    marginLeft: moderateScale(15),
    marginBottom: moderateScale(20),
    paddingHorizontal: moderateScale(5),
  },
});
