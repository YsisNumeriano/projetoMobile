import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export interface EscolherServicoScreenProps {
}

export function EscolherServicoScreen (props: EscolherServicoScreenProps) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icone.png')}
                style={styles.logo}/>
             
              
  
  
            <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
                <View>
                    <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {this.clicou()}}
            >
                    <Text style={styles.botaoText}>Recomeçar Cronograma</Text>
                    </TouchableOpacity>
                      
                </View>
  
                <View>
                  <TouchableOpacity
                    style={styles.botao}
                    onPress={() => {this.clicou()}}
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
  