import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const htmlToPdf = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 16, color: 'orange', fontWeight: '500'}}>
        HTML to PDF in React Native
      </Text>
      <TouchableOpacity>
        <Text style={{fontSize: 20}}>CREATE PDF</Text>
      </TouchableOpacity>
    </View>
  );
};

export default htmlToPdf;
