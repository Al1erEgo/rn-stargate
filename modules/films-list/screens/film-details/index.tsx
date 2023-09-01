import { ReactElement } from 'react';
import { Button, Text } from 'react-native';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../shared/types/navigation';

export function FilmDetails({
  route,
  navigation
}: NativeStackScreenProps<RootStackParamList, 'FilmDetails'>): ReactElement {
  const { id } = route.params;
  console.log(route);

  return (
    <>
      <Text>Film Details</Text>
      <Button title='Update title' onPress={() => navigation.setParams({ name: 'Updated!' })} />
      {/*//Problem with title types*/}
      {/*<Button title='Update title' onPress={() => navigation.setOptions({ title: 'Updated!' })} />*/}
    </>
  );
}
