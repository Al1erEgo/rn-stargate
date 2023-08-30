import { ReactElement } from 'react';
import { Image, View, Text, Pressable } from 'react-native';

import { imageCardStyles as styles } from './styles';
import { Film } from '../../types/api-dtos';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../shared/types/navigation';

type Props = {
  data: Film;
};

export function FilmCard({ data }: Props): ReactElement {
  const { id, poster, name } = data;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'FilmDetails'>>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('FilmDetails', { id: id })}>
        <View style={styles.sub}>
          <Image style={styles.cover} source={{ uri: poster.previewUrl }} />
        </View>
        <Text style={styles.h1}>{name.toUpperCase()}</Text>
      </Pressable>
    </View>
  );
}
