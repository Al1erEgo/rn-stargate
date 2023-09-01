import { ReactElement, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { filmsApi } from '../../api/films-api';
import { FilmCard } from '../../components/film-card';
import { Film } from '../../types/api-dtos';

export function FilmsList(): ReactElement {
  const [data, setData] = useState<Array<Film>>();

  useEffect(() => {
    filmsApi.getFilms().then((res) => {
      setData(res.data.docs);
    });
  }, []);

  return (
    <FlatList
      columnWrapperStyle={{ justifyContent: 'space-around' }}
      numColumns={2}
      data={data}
      renderItem={({ item }) => <FilmCard data={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
