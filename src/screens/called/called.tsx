import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './calledStyles';
import { AntDesign } from '@expo/vector-icons';

export function Called() {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}> 
        <AntDesign 
          name='customerservice'
          size={92}
        />
          
        
      </View>

      <TouchableOpacity 
        style={styles.button}
      >
        <Text style={styles.text}>SOLICITAR SERVIÇO</Text>
      </TouchableOpacity>

    </View>
  );
}