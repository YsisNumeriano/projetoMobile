import * as React from 'react';
import { Alert, View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {

    return (
      <View style={styles.container}>
        <Image
        source={require('../../assets/icone.png')}
        style={styles.logo}/>
        
        <TextInput
            style={styles.input}
            placeholder="Email"
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
        />     
        <TouchableOpacity
            style={styles.botao}
            onPress={() => {this.clicou()}}
            >
            <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4CF13',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
        },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300, 
        backgroundColor:'#fff',       
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        
    },
    

    botaoText: {
        marginTop: 10,
        padding: 10,
        width: 300,        
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        textAlign: 'center'
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor:'#E8D52E',
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent:'center'
    }
});