import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Random from 'expo-random';

export interface AgendarServicoScreenProps {
  navigation: any;
}

export function AgendarServicoScreen({
  navigation,
}: AgendarServicoScreenProps) {
  const [historico, setHistorico] = React.useState([]);
  const handleFinish = () => {
    navigation.navigate({
        name: "HairHistory",
        params: { historico }
    });
  };

  const handleItemClick = (novoHistorico) => {
    setHistorico((prev) => [...prev, novoHistorico]);
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icone.png")} style={styles.logo} />
      <MaterialIcons name="calendar-today" size={30} />
      <Text style={{ marginVertical: 8 }}>Cronograma Capilar</Text>

      <ScrollView>
        <Text>Etapa 1</Text>
        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleItemClick({ name: "Hidratação", step: 1, id: Random.getRandomBytes(1)[0] })}
          >
            <Text style={styles.botaoText}>Hidratação</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => handleItemClick({ name: "Nutrição", step: 1, id: Random.getRandomBytes(1)[0] })}
          >
            <Text style={styles.botaoText}>Nutrição</Text>
          </TouchableOpacity>

          <View
            style={{ flexDirection: "column", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Reconstrução", step: 1, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Reconstrução</Text>
            </TouchableOpacity>
          </View>
          <Text>Etapa 2</Text>
          <View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Nutrição", step: 2, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Nutrição</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Hidratação", step: 2, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Hidratação</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Nutrição", step: 2, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Nutrição</Text>
            </TouchableOpacity>
          </View>
          <Text>Etapa 3</Text>
          <View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Hidratação", step: 3, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Hidratação</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Nutrição", step: 3, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Nutrição</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Reconstrução", step: 3, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Reconstrução</Text>
            </TouchableOpacity>
          </View>
          <Text>Etapa 4</Text>
          <View>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Hidratação", step: 4, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Hidratação</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Hidratação", step: 4, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Hidratação</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => handleItemClick({ name: "Nutrição", step: 4, id: Random.getRandomBytes(1)[0] })}
            >
              <Text style={styles.botaoText}>Nutrição</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.botaoFinish} onPress={handleFinish}>
          <Text style={styles.botaoText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4CF13",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 25,
  },

  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: "#E8D52E",
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoFinish: {
    width: 300,
    height: 42,
    backgroundColor: "#8f8636",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 24,
  },
});
