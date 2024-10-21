import React from 'react';
import {View, Image} from 'react-native';
import {images} from '../constants';

const ImageCom = ({img}) => {
  return (
    <View style={{marginBottom: 10}}>
      <Image
        source={img}
        style={{
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
};

export default ImageCom;
