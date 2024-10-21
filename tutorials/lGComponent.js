import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LGComponent = () => {
  return (
    <View style={{margin: 20}}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <View style={{height: 100, width: 100}}>
          <Text style={{color: 'white', margin: 20}}>Vertical gradient</Text>
        </View>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{marginTop: 10}}>
        <View style={{height: 100, width: 100}}>
          <Text style={{color: 'white', margin: 20}}>Horizontal gradient</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LGComponent;
