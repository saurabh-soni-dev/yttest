import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {icons} from '../constants';

const Home = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Textfeild',
      nav: 'InputFeild',
    },
    {
      id: 2,
      name: 'UseEffect',
      nav: 'Useeffect',
    },
    {
      id: 3,
      name: 'how ro get avilable wifi',
      nav: 'Wifidetails',
    },
    {
      id: 4,
      name: 'VoiceInput',
      nav: 'VoiceInput',
    },
    {
      id: 5,
      name: 'Dynamic Checkbox',
      nav: 'Dynemiccheckbox',
    },
    {
      id: 6,
      name: 'accordian / collapsible',
      nav: 'Dynamictextinput',
    },
    {
      id: 7,
      name: 'custom fonts',
      nav: 'Dynamictextinput',
    },
    {
      id: 8,
      name: 'image tutorial',
      nav: 'Dynamictextinput',
    },
    {
      id: 9,
      name: 'modal',
      nav: 'Dynamictextinput',
    },
    {
      id: 10,
      name: 'reusable textinput',
      nav: 'Dynamictextinput',
    },
    {
      id: 11,
      name: 'social share',
      nav: 'SocialShare',
    },
    {
      id: 12,
      name: 'wifidetails',
      nav: 'Dynamictextinput',
    },
    {
      id: 13,
      name: 'deviceinfo',
      nav: 'Dynamictextinput',
    },
    {
      id: 14,
      name: 'reusable textbutton',
      nav: 'Dynamictextinput',
    },
    {
      id: 15,
      name: 'reusable textinput',
      nav: 'ReusableTextInput',
    },
    {
      id: 16,
      name: 'social login',
      nav: 'SocialLogin',
    },
  ];
  const [listData, setListData] = React.useState(data);

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderWidth: 0.5,
        borderColor: 'green',
        borderRadius: 2,
        marginBottom: 5,
      }}
      onPress={() => navigation.navigate(item.nav)}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
          {index + 1}.{' '}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                textTransform: 'capitalize',
              }}>
              {item.name}
            </Text>
          </View>
        </View>
      </View>

      <Image
        source={icons.right_arrow}
        style={{
          height: 10,
          width: 10,
          tintColor: 'black',
        }}
      />
    </TouchableOpacity>
  );
  return (
    <View style={{margin: 15, flex: 1}}>
      <FlatList
        data={listData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
      <View
        style={{
          marginTop: 10,
          backgroundColor: 'green',
          padding: 10,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}>
        <Text
          style={{
            justifyContent: 'flex-end',
            textAlign: 'center',
            fontSize: 12,
            color: 'white',
          }}>
          "YT @scriptian"
        </Text>
        <Text
          style={{
            justifyContent: 'flex-end',
            textAlign: 'center',
            fontSize: 10,
            color: 'white',
          }}>
          Like | Subscribe | Share
        </Text>
      </View>
    </View>
  );
};

export default Home;
