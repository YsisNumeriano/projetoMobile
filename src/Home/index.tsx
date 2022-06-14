import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export interface HomeScreenProps {
    navigation: any;
}

export function HomeScreen ({ navigation }: HomeScreenProps) {
    const handleLogin = () => {
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            
            <Image
            source={require('../../assets/icone.png')}
            style={styles.logo}/>  

            <TouchableOpacity
            style={styles.botao}
            onPress={handleLogin}
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
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
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