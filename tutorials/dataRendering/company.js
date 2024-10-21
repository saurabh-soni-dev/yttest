import React from 'react';
import {View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const Company = () => {
  const company = {
    accounting: [
      {firstName: 'John', lastName: 'Doe', age: 23},
      {firstName: 'Mary', lastName: 'Smith', age: 32},
    ],
    sales: [
      {firstName: 'Sally', lastName: 'Green', age: 27},
      {firstName: 'Jim', lastName: 'Galley', age: 41},
    ],
  };

  const [companyData, setCompanyData] = React.useState(company);
  const [account, setAccount] = React.useState('');

  const setData = () => {
    let d = companyData.accounting;
    setAccount(d);
  };

  const getDeviceInfo = async () => {
    const id = await DeviceInfo.getAndroidId();
    const brand = await DeviceInfo.getBrand();
    const name = await DeviceInfo.getDeviceName();

    console.log(id, brand, name);
  };

  React.useEffect(() => {
    getDeviceInfo();
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Company;
