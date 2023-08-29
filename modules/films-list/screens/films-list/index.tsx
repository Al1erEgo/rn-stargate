import { ReactElement, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ImageCard } from '../../components/image-card';
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
      renderItem={({ item }) => <ImageCard data={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
