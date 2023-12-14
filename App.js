import React from 'react';
import Vouchers from './src/components/Voucher/index';
import Gerador from './src/components/Gerador/index';
import Form from './src/components/Form/Login';
import Home from './src/components/Home/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={Form}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen 
        name="Vouchers" 
        component={Vouchers}
        options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen 
        name="Gerador" 
        component={Gerador}
        options={{ headerShown: false }}
        >
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
