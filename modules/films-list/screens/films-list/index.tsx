import { ReactElement, useEffect, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { FilmCard } from '../../components/film-card';
import { filmsApi } from '../../api/films-api';
import { Header } from '../../../shared/components/header';
import { Film } from '../../types/api-dtos';

export function FilmsList(): ReactElement {
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
      renderItem={({ item }) => <FilmCard data={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
