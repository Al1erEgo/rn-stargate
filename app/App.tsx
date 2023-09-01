import { NavigationContainer } from '@react-navigation/native';
import { ReactElement } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FilmsList } from '../modules/films-list/screens/films-list';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { FilmDetails } from '../modules/films-list/screens/film-details';
import { Header } from '../modules/shared/components/header';
import { RootStackParamList } from '../modules/shared/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export function App(): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='FilmsList'
          screenOptions={{
            header: (props) => <Header {...props} />
          }}>
          <Stack.Screen name='FilmsList' component={FilmsList} />
          <Stack.Screen
            name='FilmDetails'
            component={FilmDetails}
            options={({ route }) => ({ title: route.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
