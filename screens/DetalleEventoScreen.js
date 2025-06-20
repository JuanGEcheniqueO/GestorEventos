import React from 'react';
import { View, Text } from 'react-native';

export default function DetalleEventoScreen() {
  const evento = {
    nombre: 'Fiesta de Graduación',
    fecha: '2025-12-15',
    descripcion: 'Celebración para todos los egresados del año.'
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{evento.nombre}</Text>
      <Text style={{ marginTop: 10 }}>Fecha: {evento.fecha}</Text>
      <Text style={{ marginTop: 10 }}>{evento.descripcion}</Text>
    </View>
  );
}