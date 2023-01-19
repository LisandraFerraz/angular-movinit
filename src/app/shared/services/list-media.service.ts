import { Injectable } from '@angular/core';
import { CoreApiService } from 'src/app/utils/core/core-api.service';
import { endpointsTMDB } from 'src/app/utils/environment/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ListMediaService {
  constructor(private coreApi: CoreApiService) {}

  listTrendingMovies() {
    return this.coreApi.get(
      `${endpointsTMDB.listTrendingMovies}/week`
    );
  }

  listMoviesPosters(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/images`)
  }

  listMovieGenres(){
    return this.coreApi.get(`${endpointsTMDB.listMovieGenres}`)
  }

}
