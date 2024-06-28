import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Main } from './src/main';

export default function App() {
  return (
    <>
      <Main />

      <StatusBar style="auto" />
    </>
  );
}