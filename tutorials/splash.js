import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import {images} from '../constants';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 40,
      }}>
      <View></View>
      <Image
        source={images.logo}
        style={{height: 100, width: 100, borderRadius: 50}}
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 12, color: 'black', right: 8}}>Loading...</Text>
        <ActivityIndicator size={15} color="green" />
      </View>
    </View>
  );
};

export default Splash;
