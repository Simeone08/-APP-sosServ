import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';


import { styles } from './styles';

export function Home({navigation}: any) {
  return (
    <View style={styles.container}>
        {/* Logo, nome, breve texto sobre oq faz o app */}
        <View>
            <AntDesign 
                name='tool'
                size={92}
            />
            <Text>SosServ</Text>
        </View>

        <Text>
            Serviço de qualidade na palma da sua mão!
        </Text>

        <Pressable
            onPress={() => navigation.navigate('Dashboard')}
        >
            <Text>Seguinte</Text>
        </Pressable>
    </View>
  );
}