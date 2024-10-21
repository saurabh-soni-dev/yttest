import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

const DeviceInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 15,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ImageBackground
        source={require('../assets/images/rn_logo.png')}
        style={{
          padding: 10,
          width: 150,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/icons/right_arrow.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 100,
            borderWidth: 5,
            borderColor: 'red',
            tintColor: 'red',
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default DeviceInfo;
