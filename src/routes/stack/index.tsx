import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../../Home";
import { LoginScreen } from "../../Login";
import { AgendarServicoScreen } from "../../AgendarServico";
import { EscolherServicoScreen } from "../../Finalizar";
import { HistoricoCapilar } from "../../HistoricoCapilar";

const Stack = createStackNavigator();

export default function MainStackNav() {
    return (
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ScheduleService" component={AgendarServicoScreen} />
        <Stack.Screen name="HairHistory" component={HistoricoCapilar} />
        <Stack.Screen name="FinishService" component={EscolherServicoScreen} />
      </Stack.Navigator>
    );
  }