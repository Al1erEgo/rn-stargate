import { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FilmsList } from '../modules/films-list/screens/films-list';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { FilmDetails } from '../modules/films-list/screens/film-details';

const Stack = createStackNavigator();

export function App(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FilmsList">
          <Stack.Screen name="FilmsList" component={FilmsList} />
          <Stack.Screen name="FilmDetails" component={FilmDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
