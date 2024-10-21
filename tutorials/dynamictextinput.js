import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

const Dynamictextinput = () => {
  const [input, setInput] = React.useState(['']);

  const handleAdd = () => {
    const newInputs = [...input];
    newInputs.push('');
    setInput(newInputs);
  };

  const handleRemove = index => {
    const newInputs = [...input];
    newInputs.splice(index, 1);
    setInput(newInputs);
  };

  const handleinputChange = (text, index) => {
    const newInputs = [...input];
    newInputs[index] = text;
    setInput(newInputs);
  };

  return (
    <View style={{flex: 1, margin: 30}}>
      <Text>Dynamic input</Text>


      <View style={{marginBottom: 10, flexDirection:'row'}}>
        {input.map((input, index) => (
          <View key={index}>
            <TextInput
              style={{borderWidth: 1, marginVertical: 5}}
              value={input}
              onChangeText={text => handleinputChange(text, index)}
            />
            <Button title="remove" onPress={() => handleRemove(index)} />
          </View>
        ))}
      </View>
      <Button title="add" onPress={handleAdd} />
    </View>
  );
};

export default Dynamictextinput;
