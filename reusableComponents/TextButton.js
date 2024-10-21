import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const TextButton = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text
        style={{
          color: 'white',
          fontWeight: '500',
          fontSize: 18,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
