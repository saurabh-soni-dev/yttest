import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Accordian,
  CustomFonts,
  DeviceInformation,
  Dynamictextinput,
  Dynemiccheckbox,
  Home,
  InputFeild,
  LGComponent,
  ModalExample,
  NetInformation,
  ReusableTextInput,
  ReusableVerticalCard,
  SocialShare,
  Splash,
  Useeffect,
  VoiceInput,
  Wifidetails,
} from './tutorials';
import {Company, Employees} from './tutorials/dataRendering';
import SocialLogin from './tutorials/sociallogin';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'React Native Tutorials',
            headerTitleAlign: 'center',
            // headerTintColor: 'green',
          }}
        />
        <Stack.Screen name="InputFeild" component={InputFeild} />
        <Stack.Screen name="Useeffect" component={Useeffect} />
        <Stack.Screen name="Wifidetails" component={Wifidetails} />
        <Stack.Screen name="VoiceInput" component={VoiceInput} />
        <Stack.Screen name="Dynemiccheckbox" component={Dynemiccheckbox} />
        <Stack.Screen name="Dynamictextinput" component={Dynamictextinput} />
        <Stack.Screen name="Employees" component={Employees} />
        <Stack.Screen name="Company" component={Company} />
        {/* <Stack.Screen name="htmlToPdf" component={htmlToPdf} /> */}
        <Stack.Screen
          name="DeviceInformation"
          component={DeviceInformation}
          options={{headerTitle: 'How to use image'}}
        />
        <Stack.Screen
          name="NetInformation"
          component={NetInformation}
          options={{headerTitle: 'How to Get Net Info ?'}}
        />
        <Stack.Screen
          name="CustomFonts"
          component={CustomFonts}
          options={{headerTitle: 'How to Use Custom Fonts ?'}}
        />
        <Stack.Screen
          name="LGComponent"
          component={LGComponent}
          options={{headerTitle: 'How to use Linear Gradient ?'}}
        />
        <Stack.Screen
          name="ModalExample"
          component={ModalExample}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReusableVerticalCard"
          component={ReusableVerticalCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Accordian"
          component={Accordian}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReusableTextInput"
          component={ReusableTextInput}
          options={{headerTitle: 'How to use image'}}
        />
        <Stack.Screen
          name="SocialShare"
          component={SocialShare}
          options={{headerTitle: 'How to use image'}}
        />
        <Stack.Screen
          name="SocialLogin"
          component={SocialLogin}
          options={{headerTitle: 'Google Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
