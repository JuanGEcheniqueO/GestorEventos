import React from 'react';
import { View, Text } from 'react-native';

export default function DetalleEvento({ route }) {
  const { evento } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>{evento.titulo}</Text>
      <Text>{evento.descripcion}</Text>
    </View>
  );
}