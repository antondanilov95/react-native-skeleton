import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {fontScale, horizontalScale} from "../../utils/sizes";

export default ({color, bgColor, borderColor, width, height, fontSize, borderWidth}) => {
  return StyleSheet.create({
    container: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bgColor || colors.black,
      borderColor: borderColor || colors.black,
      opacity: 1,
      borderWidth: borderWidth || 0,
      width: horizontalScale(width || 200),
      height: horizontalScale(height || 56),
      borderRadius: 28,
    },

    text: {
      color: color || colors.white,
      fontSize: horizontalScale(fontSize || fontScale(16))
    },
    icon: {
      marginRight:10,
      alignSelf:'center'
    }
  });
};
