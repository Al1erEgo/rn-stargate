import { ReactElement, useEffect, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { FilmCard } from '../../components/film-card';
import { filmsApi } from '../../api/films-api';
import { Header } from '../../../shared/components/header';
import { Film } from '../../types/api-dtos';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { RootStackParamList } from '../../../shared/types/navigation';

export function FilmsList({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'FilmsList'>): ReactElement {
  const [data, setData] = useState<Film[]>();

  useEffect(() => {
    filmsApi.getFilms().then((res) => {
      setData(res.data.docs);
    });
  }, []);
  return (
    <FlatList
      ListHeaderComponent={<Header title="STAR GATE" />}
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={2}
      data={data}
      renderItem={({ item }) => (
        <Pressable onPress={() => navigation.navigate('FilmDetails')}>
          <FilmCard data={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
