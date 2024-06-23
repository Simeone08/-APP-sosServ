import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        height: 80,
        marginTop: 80,
        borderRadius: 6,
        marginBottom: 20,
    
        justifyContent: 'center',
        alignItems: 'center',
    
        backgroundColor: '#000',
    },
    text: {
        color: '#fff',
        fontSize: 24,
        borderRadius: 4,
    },
    containerFormButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width:'80%',
        borderWidth: 1,
    },
    inputGreat:{
        height: 120,
        width:'80%',
        borderWidth: 1,
    },
    formButton: {
        height: 60,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#0026ff',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 90
    }
});