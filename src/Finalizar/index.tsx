import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export interface EscolherServicoScreenProps {
    navigation: any;
    route: any;
}

export function EscolherServicoScreen ({
    navigation,
    route
}: EscolherServicoScreenProps) {
    const { image } = route.params;
        
    const handleBack = () => {
        navigation.navigate({
            name: "ScheduleService",
        });
    };

    const handleFinish = () => {
        navigation.navigate({
            name: "Login",
        });
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icone.png')}
                style={styles.logo}/>

            <View>
                { image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> }
            </View>
  
            <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                <View>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={handleBack}
                    >
                        <Text style={styles.botaoText}>Recomeçar Cronograma</Text>
                    </TouchableOpacity>
                      
                </View>
  
                <View>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={handleFinish}
                    >
                        <Text style={styles.botaoText}>Finalizar</Text>
                    </TouchableOpacity>
                      
                </View>
            </View>
        </View>
    );
}
  
  const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#E4CF13',
          alignItems: 'center',
          justifyContent: 'center',         
          
          
    },
  
    logo: {
          width: 120,
          height:120,
          borderRadius: 100,        
          
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
      
  });
  