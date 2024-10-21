import React from 'react';
import {View, Text, Image} from 'react-native';
import {TextInputComponent} from '../reusableComponents';
import {icons} from '../constants';

const ReusableTextInput = () => {
  const [name, setName] = React.useState('');
  const [lName, setLName] = React.useState('');
  console.log(name, lName);

  return (
    <View
      style={{
        margin: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          color: 'black',
          backgroundColor: 'cyan',
          padding: 10,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        Reusable TextInput
      </Text>

      <View style={{marginTop: 30}}>
        <TextInputComponent
          iconComponent={
            <Image
              source={icons.admin}
              style={{
                height: 15,
                width: 15,
              }}
            />
          }
          placeholder="name"
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={{marginTop: 30}}>
        <TextInputComponent
          placeholder="lname"
          onChangeText={text => setLName(text)}
        />
      </View>
    </View>
  );
};

export default ReusableTextInput;
