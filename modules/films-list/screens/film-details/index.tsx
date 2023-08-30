import { ReactElement } from 'react';
import { Text } from 'react-native';
import { RootStackParamList } from '../../../shared/types/navigation';
import { RouteProp } from '@react-navigation/native';

export function FilmDetails({
  route,
}: {
  route: RouteProp<RootStackParamList, 'FilmDetails'>;
}): ReactElement {
  // const { filmId } = route.params;
  console.log(route);

  return <Text>Film Details</Text>;
}
