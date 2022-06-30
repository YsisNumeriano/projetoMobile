import Routes from './src/routes';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'AsyncStorage',
  'Setting a timer',
  'Non-serializable values were found in the navigation state',
]);

export default function App () {
  return <Routes />
}
