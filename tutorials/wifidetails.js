import React from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import WifiReborn from 'react-native-wifi-reborn';

const Wifidetails = () => {
  const [wifiList, setWifiList] = React.useState([]);
  console.log(wifiList + 'list');
  const [currrentSSID, setCurrentSSID] = React.useState('');

  React.useEffect(() => {
    permission();
    WifiReborn.getCurrentWifiSSID().then(
      ssid => {
        console.log('Your current connected wifi SSID is ' + ssid);
        setCurrentSSID(ssid);
      },
      () => {
        console.log('Cannot get current SSID!');
      },
    );

    WifiReborn.loadWifiList().then(list => {
      setWifiList(list);
    });
  }, []);

  const permission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required  ' +
          'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
     
      console.log('granted');
    } else {
      console.log('not granted');
     
    }
  };

  return (
    <View style={{flex: 1, margin: 20}}>
      <Text
        style={{
          fontSize: 20,
          color: 'green',
          textAlign: 'center',
        }}>
        How to Get Wifi Details & Available WifiList
      </Text>

      <Text style={{marginTop: 20, color: 'red'}}>
        current ssid: {currrentSSID}
      </Text>

      {wifiList.map(list => (
        <Text style={{}}>Wifi List: {list.SSID}</Text>
      ))}
    </View>
  );
};

export default Wifidetails;
