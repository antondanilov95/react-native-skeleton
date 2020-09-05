import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import {fontScale, horizontalScale} from "../../utils/sizes";

export default ({editable}) => {
  return StyleSheet.create({
    input: {
      color: colors.gray,
      fontSize: fontScale(15),
      backgroundColor: colors.white,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: editable ? colors.gray :colors.white,
      marginTop: 15,
      paddingHorizontal: 17,
      height: horizontalScale(56),
      width: '100%',
    },
  });
};
