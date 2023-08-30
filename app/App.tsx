import { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FilmsList } from '../modules/films-list/screens/films-list';
import NavigationContainer from 'expo-router/build/fork/NavigationContainer.native';
import 'react-native-gesture-handler';

export function App(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <FilmsList />
      </NavigationContainer>
    </SafeAreaView>
  );
}
