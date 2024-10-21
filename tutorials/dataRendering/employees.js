import React from 'react';
import {View, Text} from 'react-native';

const Employees = () => {
  const employee = {
    name: 'shreyansh',
    age: '25',
    job_role: 'software engineer',
    location: 'maharashtra, india',
    address: {
      longitude: '-113.6335371',
      latitude: '37.1049502',
      postal_code: '482045',
    },
  };

  const [employeeData, setEmployeeDate] = React.useState(employee);

  return (
    <View
      style={{
        flex: 1,
        margin: 15,
      }}>
      <View style={{backgroundColor: 'green', padding: 15, borderRadius: 5}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            textTransform: 'capitalize',
          }}>
          {employee.name}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '500'}}>Age : </Text>
          <Text style={{color: 'white'}}>{employee.age}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '500'}}>
            Designation :{' '}
          </Text>
          <Text style={{color: 'white', textTransform: 'capitalize'}}>
            {employee.job_role}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '500'}}>Location : </Text>
          <Text style={{color: 'white', textTransform: 'capitalize'}}>
            {employee.location}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '500'}}>Longitude : </Text>
          <Text style={{color: 'white', textTransform: 'capitalize'}}>
            {employee.address.longitude}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '500'}}>Latitude : </Text>
          <Text style={{color: 'white', textTransform: 'capitalize'}}>
            {employee.address.latitude}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: '500'}}>
            Postal Code :{' '}
          </Text>
          <Text style={{color: 'white', textTransform: 'capitalize'}}>
            {employee.address.postal_code}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Employees;
