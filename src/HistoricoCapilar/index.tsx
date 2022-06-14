import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export interface HistoricoCapilarProps {
  navigation: any;
  route: any;
}

const Item = ({ name, step }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.itemStep}>Etapa: {step}</Text>
    </View>
    <Text style={styles.itemTitle}>{name}</Text>
  </View>
);

export function HistoricoCapilar({ navigation, route }: HistoricoCapilarProps) {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const renderItem = ({ item }) => <Item name={item.name} step={item.step} />;

  const handleFinish = () => {
    navigation.navigate({
      name: "FinishService",
      params: { image },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/icone.png")} style={styles.logo} />
      <FlatList
        data={route.params.historico}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
      />
      <View>
        <TouchableOpacity
          style={styles.botaoImportarImagem}
          onPress={pickImage}
        >
          <Text style={styles.botaoTextImage}>Resultado Capilar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.botaoFinish} onPress={handleFinish}>
          <Text style={styles.botaoText}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#f3d500",
    borderColor: "#b29213",
    borderWidth: 1,
    borderRadius: 4,
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemStep: {
    fontSize: 14,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
  botaoImportarImagem: {
    width: 200,
    height: 36,
    backgroundColor: "#8f8636",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },

  botaoTextImage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFFF"
  },
});
