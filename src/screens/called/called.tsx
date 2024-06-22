import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './calledStyles';

export function Called() {
  return (
    <View style={styles.container}>
        <Text>Testando</Text>
    </View>
  );
}