import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiService } from 'src/app/utils/core/core-api.service';
import { endpointsTMDB } from 'src/app/utils/environment/endpoints';
import { IMovieDetails } from 'src/app/utils/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class ListMovieDetailsService {

  constructor(private coreApi: CoreApiService) { }

  listMoviesDetails(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}`)
  }

  listMoviesSocials(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/external_ids`)
  }

  listMovieCast(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/credits`)
  }

  listMovieImages(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/images`)
  }

  listProviders(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/watch/providers`)
  }

  listReviews(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/reviews`)
  }

  listRecommendations(movieId: number){
    return this.coreApi.get(`${endpointsTMDB.listMovies}/${movieId}/recommendations`)
  }
}
