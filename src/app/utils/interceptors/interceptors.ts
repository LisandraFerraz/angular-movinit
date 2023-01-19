import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MovinitInterceptor } from "./movinit-api.interceptor";
import { TMDBInterceptor } from "./tmdb.interceptor";

export const interceptorsProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MovinitInterceptor,
    multi: true
  },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TMDBInterceptor,
  //   multi: true
  // }
]
