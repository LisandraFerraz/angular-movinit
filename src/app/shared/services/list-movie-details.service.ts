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
}
