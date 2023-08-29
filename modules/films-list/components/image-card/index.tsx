import { ReactElement } from 'react';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';

import { imageCardStyles as styles } from './styles';
import { Film } from '../../types/api-dtos';

type Props = {
  data: Film;
};

export function ImageCard({ data }: Props): ReactElement {
  const { image, name } = data;

  return (
    <View style={styles.container}>
      <View style={styles.sub}>
        <Image style={styles.cover} source={{ uri: image }} />
      </View>
      <Text style={styles.h1}>{name.toUpperCase()}</Text>
    </View>
  );
}
