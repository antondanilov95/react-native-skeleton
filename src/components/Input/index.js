import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

export function Input(props){

  const handleChangeText = value => {
    const {onChangeText} = props;
    onChangeText && onChangeText(value);
  };

  const onFocus = value => {
    const {onFocus} = props;
    onFocus && onFocus(value);
  };

    const {
      placeholder,
      placeholderColor,
      style,
      editable,
      value,
      isSecure,
      isCapitalize
    } = props;
    const _styles = styles({editable});

    return (
        <TextInput
            underlineColorAndroid="transparent"
            secureTextEntry={isSecure}
            autoCapitalize={!isCapitalize ? 'none' : 'sentences'}
            value={value}
            placeholder={placeholder}
            editable={editable}
            placeholderTextColor={placeholderColor}
            style={[_styles.input, style]}
            onFocus={onFocus}
            onChangeText={handleChangeText}
        />
    );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  editable: PropTypes.bool,
  placeholderColor: PropTypes.string,
  style: PropTypes.any,
  isSecure: PropTypes.bool,
  isCapitalize: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  editable: true,
  isCapitalize: true,
  isSecure: false,
  placeholderColor: colors.gray,
  secureTextEntry: false
};
