import { Injectable } from '@angular/core';
import { CoreApiService } from 'src/app/utils/core/core-api.service';
import { endpoints } from 'src/app/utils/environment/endpoints';

@Injectable({
  providedIn: 'root',
})
export class ListMediaService {
  apikey = '2f03702b7c188bdee0bb59a265acd9bc';

  constructor(private coreApi: CoreApiService) {}

  listTrendingMovies() {
    return this.coreApi.get(
      `${endpoints.listTrendingMovies}/week?api_key=${this.apikey}`
    );
  }
}
