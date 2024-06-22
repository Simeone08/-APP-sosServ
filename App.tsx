import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Chamado } from './src/screens/chamado/chamado';

export default function App() {
  return (
    <>
      <Chamado/>

      <StatusBar style="auto" />
    </>
  );
}