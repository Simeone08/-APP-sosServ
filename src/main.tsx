import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


export function Main() {
    const [called, setCalled] = useState(false);

    function handleCalled(){
        setCalled(!called)
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
                <TouchableOpacity 
                    onPress={handleCalled}
                    style={{marginTop: 50, marginLeft: 20,}}
                >
                    <AntDesign 
                    name='leftcircle'
                    size={32}
                />
                </TouchableOpacity>

                
            </>
        )}
        
    </>
  );
}