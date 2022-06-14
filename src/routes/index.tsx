import { NavigationContainer } from '@react-navigation/native';
import MainStackNav from './stack';

export default function Routes () {
    return (
        <NavigationContainer>
            <MainStackNav />
        </NavigationContainer>
    );
}