import React from 'react';
import {View, Text} from 'react-native';

const CustomFonts = () => {
  return (
    <View style={{margin: 15}}>
      <Text
        style={{fontSize: 30, color: 'black', fontFamily: 'Rokkitt-Regular'}}>
        Like subscribe & share
      </Text>
      <Text style={{fontSize: 30, color: 'black', fontFamily: 'Inter-Regular'}}>
        Like subscribe & share
      </Text>
      <Text
        style={{fontSize: 30, color: 'black', fontFamily: 'Lobster-Regular'}}>
        Like subscribe & share
      </Text>
    </View>
  );
};

export default CustomFonts;
