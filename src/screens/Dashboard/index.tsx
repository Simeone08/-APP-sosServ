import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles';

export function Dashboard() {
  return (
    <View style={styles.container}>
        {/* tipos de serviço  e solicitação*/}
        <View>
            <Text>Tipos de serviço</Text>
        </View>

        <View style={styles.container}>

        <View style={styles.ImageContainer}> 
            <AntDesign 
                name='tool'
                size={40}
            />
        </View>                

        <TouchableOpacity 
            style={styles.button}
            //onPress={handleSolicitar}
        >
            <Text style={styles.text}>SOLICITAR SERVIÇO</Text>
        </TouchableOpacity>    
        </View>

    </View>
  );
}