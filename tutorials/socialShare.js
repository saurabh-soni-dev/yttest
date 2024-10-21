import React from 'react';
import {View, Text, TouchableOpacity, Share, Alert} from 'react-native';

const SocialShare = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View
      style={{
        margin: 35,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          fontWeight: '500',
          color: 'white',
          backgroundColor: 'orange',
          padding: 15,
          textTransform: 'uppercase',
        }}>
        How to add social share
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 30,
          alignItems: 'center',
          backgroundColor: 'cyan',
          padding: 5,
        }}
        onPress={onShare}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            textTransform: 'capitalize',
          }}>
          share
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialShare;
