import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import EventoCard from '../components/EventoCard';

const eventos = [
  { id: '1', titulo: 'Concierto de Rock', descripcion: 'En el Teatro Provincial' },
  { id: '2', titulo: 'Charla de tecnología', descripcion: 'Universidad Nacional' },
];

export default function Inicio({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Crear nuevo evento" onPress={() => navigation.navigate('CrearEvento')} />
      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventoCard evento={item} onPress={() => navigation.navigate('DetalleEvento', { evento: item })} />
        )}
      />
    </View>
  );
}