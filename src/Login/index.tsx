import * as React from 'react';
import { Alert, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import UserService from '../api/services/UserService';

export interface LoginScreenProps {
    navigation: any;
}

export function LoginScreen ({ navigation }: LoginScreenProps) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        if (email.length && password.length) {
            UserService.login({ email, password })
                .then(() => {
                    navigation.navigate('ScheduleService');
                })
                .catch((error) => Alert.alert(error));
        } else {
            ToastAndroid.show("Você possui algum campo inválido", ToastAndroid.LONG);
        }
    }

    return (
      <View style={styles.container}>
        <Image
        source={require('../../assets/icone.png')}
        style={styles.logo}/>
        
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={e => { setEmail(e) }}
            defaultValue={email}
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
        />     
        <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={styles.botao}
        >
            <Text style={styles.botaoText}>Criar conta</Text>
        </TouchableOpacity>
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
    },
});