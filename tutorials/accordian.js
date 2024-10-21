import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

const Accordian = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleExpand = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View
      style={{
        margin: 20,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Rokkitt-Regular',
          fontSize: 25,
          fontWeight: '700',
          color: 'white',
          backgroundColor: 'green',
          paddingHorizontal: 25,
          paddingVertical: 15,
          borderRadius: 5000000,
          elevation: 10,
        }}>
        React Native Accordian
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 30,
        }}
        onPress={toggleExpand}>
        <Text style={{fontSize: 20, color: 'red'}}>collapse</Text>
      </TouchableOpacity>

      <Collapsible collapsed={collapsed}>
        <View
          style={{
            marginTop: 30,
          }}>
          <Text style={{fontSize: 15, color: 'black'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default Accordian;
