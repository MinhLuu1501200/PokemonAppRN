import {View, TextInput, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function InputCommon({placeholder, customStyle, ...rest}) {
  return (
    <View style={[styles.container]}>
      <TextInput
        style={[styles.input, customStyle]}
        placeholder={placeholder}
        placeholderTextColor={'#00000050'}
        {...rest}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 30,
    width: 320,
    color: '#00000050',
    fontSize: 14,
    paddingHorizontal: 30,
    paddingVertical: 17,
    backgroundColor: '#ECF0F1',
  },
});
