import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Texto = () => {
  const [texto, setTexto] = useState('Hello');
  
  return (
      texto
  )
}

export default function App() {
  return (
    <View style={styles.container}>
    <Texto texto={'estamos tratando de ayudarte'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
