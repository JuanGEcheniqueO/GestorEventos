import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function EventoCard({ evento, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.titulo}>{evento.titulo}</Text>
      <Text>{evento.descripcion}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});