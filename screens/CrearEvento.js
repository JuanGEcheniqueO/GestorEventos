import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CrearEventoScreen() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const guardarEvento = () => {
    alert('Evento creado (simulado)');
    setNombre('');
    setFecha('');
    setDescripcion('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Nuevo Evento</Text>
      <Text>Nombre:</Text>
      <TextInput value={nombre} onChangeText={setNombre} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Fecha:</Text>
      <TextInput value={fecha} onChangeText={setFecha} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Descripción:</Text>
      <TextInput value={descripcion} onChangeText={setDescripcion} style={{ borderWidth: 1, marginBottom: 20 }} multiline />
      <Button title="Guardar" onPress={guardarEvento} />
    </View>
  );
}