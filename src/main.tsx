import React, { useReducer, useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


const reducer = (state: any, action: any) => {
    switch (action.type){
        case 'solicitar':
            return { called: !state.called}
        case 'submit':
            return { 
                name: action.name = '',
                address: action.address = '',
                contact: action.contact = '',
                desc: action.desc = '',
                called: !action.called
            }
        default:
            return state
    }
}


export function Main() {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        address: '',
        contact: '',
        desc: '',
        called: false
    })

    function handleSolicitar(){
        dispatch({ type: 'solicitar' })
    }

    function handleClick(){
        dispatch({ type: 'submit', state })
    }

    function handleEmail(){
        console.log('email enviado.')
    }

  return (
    <>
        {state.called === true && (
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
                        onPress={handleSolicitar}
                    >
                        <Text style={styles.text}>SOLICITAR SERVIÇO</Text>
                    </TouchableOpacity>    
                </View>
                
            </>
        )}

        {state.called === false &&(
            <>
                <View style={styles.containerFormButton}>
                    <TouchableOpacity 
                        onPress={handleSolicitar}
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
                        onPress={handleClick}
                        onPressIn={handleEmail}
                    >
                        <Text style={styles.text}>ENVIAR</Text>
                    </Pressable>
                </View>
            </>
        )}
        
    </>
  );
}