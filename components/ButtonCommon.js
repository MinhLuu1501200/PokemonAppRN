import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function ButtonCommon({
  disabled,
  text,
  onPress,
  customStyle,
  colorText,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        styles.center,
        disabled && {opacity: 0.5},
        customStyle,
      ]}>
      <Text style={[styles.text, colorText]}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#D35400',
    height: 50,
    width: 320,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
