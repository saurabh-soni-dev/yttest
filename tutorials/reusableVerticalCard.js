import React from 'react';
import {View, Text} from 'react-native';

const ReusableVerticalCard = () => {
  return (
    <View
      style={{
        flex: 1,
        margin: 30,
      }}>
      <Text
        style={{
          backgroundColor: 'black',
          textAlign: 'center',
          color: 'yellow',
          fontSize: 25,
          fontWeight: '700',
          padding: 20,
        }}>
        How to Make Reusable Vertical Card Component
      </Text>

      <View style={{marginVertical: 30}}></View>
    </View>
  );
};

export default ReusableVerticalCard;
