import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

export function FormSolicit() {
  return (
    <>   
        <View style={styles.formContainer}>
            <Text>Nome:</Text>
            <TextInput 
                style={styles.input}
            />
            <Text>Endereço:</Text>
            <TextInput 
                style={styles.input}
            />
            <Text>Contato:</Text>
            <TextInput 
                style={styles.input}
                keyboardType='number-pad'
            />
            <Text>Descrição de serviço:</Text>
            <TextInput 
                style={styles.inputGreat}
            />

            <Pressable 
                style={styles.formButton}
                //onPress={handleClick}
                //onPressIn={handleEmail}
            >
                <Text style={styles.text}>ENVIAR</Text>
            </Pressable>
        </View>
    </>
  );
}