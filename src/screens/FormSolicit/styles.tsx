import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    },
    text: {
        color: '#fff',
        fontSize: 24,
        borderRadius: 4,
    },
});