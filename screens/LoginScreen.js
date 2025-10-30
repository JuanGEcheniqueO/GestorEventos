import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Iniciar Sesión</Text>
      <Text>Usuario:</Text>
      <TextInput style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Contraseña:</Text>
      <TextInput secureTextEntry style={{ borderWidth: 1, marginBottom: 20 }} />
      <Button title="Ingresar" onPress={() => alert('Login simulado')} />
    </View>
  );
}