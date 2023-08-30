import { ReactElement } from 'react';
import { Image, View, Text } from 'react-native';

import { imageCardStyles as styles } from './styles';
import { Film } from '../../types/api-dtos';

type Props = {
  data: Film;
};

export function FilmCard({ data }: Props): ReactElement {
  const { poster, name } = data;

  return (
    <View style={styles.container}>
      <View style={styles.sub}>
        <Image style={styles.cover} source={{ uri: poster.previewUrl }} />
      </View>
      <Text style={styles.h1}>{name.toUpperCase()}</Text>
    </View>
  );
}