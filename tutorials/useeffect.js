import React from 'react';
import {View, Text, TouchableOpacity, _ScrollView} from 'react-native';

const Useeffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 2);
    }, 1000);

    // clean up func
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <View style={{margin: 15}}>
      <Text style={{fontSize: 16, color: 'red'}}>{count}</Text>
    </View>
  );
};

export default Useeffect;
