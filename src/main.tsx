import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


export function Main() {
    const [called, setCalled] = useState(false);
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [contact, setContact] = useState('');
    const [text, setText] = useState('');

    function handleCalled(){
        setCalled(!called)
    }

    function handleClean(){
        setText('')
    }

    function handleEmail(){
        console.log('email enviado')
    }

  return (
    <>
        {called === true && (
            <>
                <View style={styles.container}>

                    <View style={styles.ImageContainer}> 
                        <AntDesign 
                            name='customerservice'
                            size={92}
                        />
                    </View>                
                
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleCalled}
                    >
                        <Text style={styles.text}>SOLICITAR SERVIÇO</Text>
                    </TouchableOpacity>    
                </View>
                
            </>
        )}

        {called === false &&(
            <>
                <View style={styles.containerFormButton}>
                    <TouchableOpacity 
                        onPress={handleCalled}
                        style={{marginTop: 50, marginLeft: 20,}}
                    >
                        <AntDesign 
                            name='leftcircle'
                            size={32}
                        />
                    </TouchableOpacity>

                    <AntDesign 
                        name='customerservice'
                        size={50}
                        style={{marginTop: 45, marginRight:15}}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text>Nome:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setName}
                        value={name}
                    />
                    <Text>Endereço:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setAdress}
                        value={adress}
                    />
                    <Text>Contato:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={setContact}
                        value={contact}
                        keyboardType='number-pad'
                    />
                    <Text>Descrição de serviço:</Text>
                    <TextInput 
                        style={styles.inputGreat}
                        onChangeText={setText}
                        value={text}
                    />

                    <Pressable 
                        style={styles.formButton}
                        onPressIn={handleEmail}
                        onPress={handleCalled}
                        onPressOut={handleClean}
                    >
                        <Text style={styles.text}>ENVIAR</Text>
                    </Pressable>
                </View>
            </>
        )}
        
    </>
  );
}