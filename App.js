import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import CrearEventoScreen from './screens/CrearEventoScreen';
import DetalleEventoScreen from './screens/DetalleEventoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Crear Evento" component={CrearEventoScreen} />
        <Tab.Screen name="Detalle" component={DetalleEventoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}