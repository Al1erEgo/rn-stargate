import { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FilmsList } from '../modules/films-list/screens/films-list';

export function App(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FilmsList />
    </SafeAreaView>
  );
}
