// todays task - how to make textfeild

import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextFeild = () => {
  const [input, setInput] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        margin: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'green',
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Text Input in React Native
      </Text>

      <View
        style={{
          marginTop: 20,
        }}>
        <TextInput
          placeholder="Search item"
          placeholderTextColor="black"
          value={input}
          onChangeText={text => setInput(text)}
          style={{
            fontSize: 16,
            // color: 'red',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            // backgroundColor:'green'
          }}
        />
      </View>
      <Text style={{marginTop: 15, fontSize: 20, color:'green'}}>{input}</Text>
    </View>
  );
};

export default TextFeild;
