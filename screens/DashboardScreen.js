import React from 'react';
import { View, Text, FlatList } from 'react-native';

const eventos = [
  { id: '1', nombre: 'Reunión', fecha: '2025-07-01' },
  { id: '2', nombre: 'Fiesta', fecha: '2025-07-10' },
];

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Eventos</Text>
      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}>
            <Text style={{ fontSize: 18 }}>{item.nombre}</Text>
            <Text>Fecha: {item.fecha}</Text>
          </View>
        )}
      />
    </View>
  );
}