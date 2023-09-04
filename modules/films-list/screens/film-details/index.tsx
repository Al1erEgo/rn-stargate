import { StackScreenProps } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { Button, Text } from 'react-native';
import { RootStackParamList } from '../../../shared/types/navigation';

export function FilmDetails({
  route,
  navigation
}: StackScreenProps<RootStackParamList, 'FilmDetails'>): ReactElement {
  const { id } = route.params;
  console.log(route);

  //работает если нативный хэдер рисуется
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => <Button title='H' onPress={() => navigation.navigate('FilmsList')} />
  //   });
  // }, [navigation]);

  return (
    <>
      <Text>Film Details</Text>
      <Button title='Update title' onPress={() => navigation.setOptions({ title: 'Updated!' })} />
    </>
  );
}
