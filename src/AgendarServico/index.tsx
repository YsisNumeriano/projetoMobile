import * as React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export interface AgendarServicoScreenProps {
}

export function AgendarServicoScreen (props: AgendarServicoScreenProps) {
    return (
      <View style={styles.container}>
             <Image
            source={require('../../assets/icone.png')}
            style={styles.logo}/>
            <MaterialIcons name="calendar-today" size={30}/>
            <Text>Cronograma Capilar</Text>


            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View>
                    <Text>Etapa 1</Text>
                    <View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Hidratação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Nutrição</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Reconstrução</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Etapa 2</Text>
                    <View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Nutrição</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Hidratação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Nutrição</Text>
                        </TouchableOpacity>                      
                    </View>
                    <Text>Etapa 3</Text>
                    <View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Hidratação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Nutrição</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Reconstrução</Text>
                        </TouchableOpacity>                      
                    </View>
                    <Text>Etapa 4</Text>
                    <View>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Hidratação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Hidratação</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => {this.clicou()}}
            >
                            <Text style={styles.botaoText}>Nutrição</Text>
                        </TouchableOpacity>                      
                    </View>
                

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
        
        
    },

    logo: {
        width: 100,
        height:100,
        borderRadius: 100,  
    },


    

    botaoText: {
        marginTop: 10,
        padding: 10,
        width: 300,        
        ontSize: 16,
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
