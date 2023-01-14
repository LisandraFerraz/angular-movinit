import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiService } from 'src/app/utils/core/core-api.service';
import { endpoints } from 'src/app/utils/environment/endpoints';
import { IMovieDetails } from 'src/app/utils/interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class ListMovieDetailsService {

  constructor(private coreApi: CoreApiService) { }

  listMoviesDetails(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}`)
  }

  listMoviesSocials(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/external_ids`)
  }

  listMovieCast(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/credits`)
  }

  listMovieImages(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/images`)
  }

  listProviders(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/watch/providers`)
  }

  listReviews(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/reviews`)
  }

  listRecommendations(movieId: number){
    return this.coreApi.get(`${endpoints.listMovies}/${movieId}/recommendations`)
  }
}
