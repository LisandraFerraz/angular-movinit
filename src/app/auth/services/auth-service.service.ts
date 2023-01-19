import { Injectable } from '@angular/core';
import { CoreApiService } from 'src/app/utils/core/core-api.service';
import { endpointsAPI } from 'src/app/utils/environment/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private coreApi: CoreApiService
  ) { }


  login(data: any, opts: any){
    return this.coreApi.post(endpointsAPI.login, data, opts)
  }

  getUser(opts: any){
    return this.coreApi.get(endpointsAPI.listUser, opts)
  }
}
