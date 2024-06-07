import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  favIcon: {
    height: moderateScale(25),
    width: moderateScale(25),
  },
  heartBox: {
    position: 'absolute',
    top: moderateScale(15),
    right: moderateScale(5),
    zIndex: 1000,
    backgroundColor: Colors.TRANSPARENT,
  },
  posterImage: {
    width: '100%',
    height: moderateScale(190), // Adjust the height as needed
    resizeMode: 'contain',
    zIndex: 0,
  },
  moviesName: {
    fontSize: moderateScale(15),
    fontFamily: FontFamily.TitilliumWebLight,
    color: Colors.HEADERTITLECOLOR,
  },
});
