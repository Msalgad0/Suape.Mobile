import React from 'react';
import { StyleSheet} from 'react-native';
import Vouchers from './src/components/Voucher/index';
import Gerador from './src/components/Gerador/index';

import Main from './src/components/Main/index'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
        ></Stack.Screen>
        <Stack.Screen name="Vouchers" component={Vouchers}></Stack.Screen>
        <Stack.Screen name="Gerador" component={Gerador}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
