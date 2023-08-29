import { commonInstance } from '../../shared/api/common-instance';
import { Film } from '../types/api-dtos';

export const filmsApi = {
  getFilms() {
    return commonInstance.get<{ docs: Film[] }>('v1.3/movie', { params: { enName: 'Stargate' } });
  },
};
