import React from 'react';
import {View, TextInput} from 'react-native';
import {onChange} from 'react-native-reanimated';

const TextInputComponent = ({
  placeholder,
  secureTextEntry,
  keyboardType,
  onChangeText,
  multiline,
  value,
  iconComponent,
  passwordVisibleIcon,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 10,
      }}>
      {iconComponent}
      <TextInput
        style={{marginLeft: 5}}
        placeholderTextColor="black"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        multiline={multiline}
        value={value}
      />
      {passwordVisibleIcon}
    </View>
  );
};

export default TextInputComponent;
