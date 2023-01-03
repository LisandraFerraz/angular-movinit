import { Injectable } from '@angular/core';
import { CoreApiService } from 'src/app/utils/core/core-api.service';
import { endpoints } from 'src/app/utils/environment/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ListMediaService {
  constructor(private coreApi: CoreApiService) {}

  listTrendingMovies() {
    return this.coreApi.get(
      `${endpoints.listTrendingMovies}/week`
    );
  }

  listMoviesPosters(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/images`)
  }

  listMovieGenres(){
    return this.coreApi.get(`${endpoints.listMovieGenres}`)
  }

}
