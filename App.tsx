import { View } from "react-native";
import { AgendarServicoScreen } from "./src/AgendarServico";
import { HomeScreen } from "./src/Home";
import { LoginScreen } from "./src/Login";
import { EscolherServicoScreen } from "./src/Finalizar";

export default function App () {

  return (
    <View style={{flex:1}}>
        {/*<HomeScreen/> */}
        {/*<LoginScreen /> */}
        {/*<AgendarServicoScreen/>*/}
        <EscolherServicoScreen/>
        

    </View>
  );
}
