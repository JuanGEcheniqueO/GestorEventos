import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './screens/Inicio';
import CrearEvento from './screens/CrearEvento';
import DetalleEvento from './screens/DetalleEvento';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="CrearEvento" component={CrearEvento} />
        <Stack.Screen name="DetalleEvento" component={DetalleEvento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}