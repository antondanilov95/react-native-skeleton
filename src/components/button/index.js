import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export function Button(props) {

  const onPress = () => {
    const {onPress} = props;
    onPress && onPress();
  };


  const {color, bgColor, borderColor, style, disabled, width, height, fontSize, icon, iconStyle, borderWidth} = props;
  const _styles = styles({color, bgColor, borderColor, width, height, fontSize, borderWidth});


  return (
      <TouchableOpacity style={[_styles.container, style]} disabled={disabled} onPress={onPress}>
        {icon && <Image style={[_styles.icon, iconStyle]} source={icon}/>}
        <Text style={_styles.text}>{props.children}</Text>
      </TouchableOpacity>
  )
}


Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  icon: PropTypes.any,
  iconStyle: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  style: PropTypes.any,
};

Button.defaultProps = {
  disabled: false,
};
