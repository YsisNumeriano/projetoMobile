import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    return (
        <View style={styles.container}>
            
            <Image
            source={require('../../assets/icone.png')}
            style={styles.logo}/>  

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
    alignItems: 'center',
    justifyContent:'center',
    }, 
    logo: {
    width: 150,
    height: 150,
    borderRadius: 100
    },
    botaoText: {
        marginTop: 10,
        padding: 10,
        width: 300,
        color: '#fff',
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
})