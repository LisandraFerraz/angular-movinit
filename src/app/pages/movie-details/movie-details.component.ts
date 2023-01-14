import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, throwError } from 'rxjs';
import { ListMovieDetailsService } from 'src/app/shared/services/list-movie-details.service';
import { IMovieDetails, IMovieSocials } from 'src/app/utils/interfaces/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  movieD: any | undefined
  movieSocial: any | undefined
  movieCredit: any | undefined
  movieImages: any | undefined
  watchProviders: any | undefined
  providers: any | undefined
  reviews: any | undefined
  authorReview: any | undefined
  recommended: any | undefined

  constructor(
    private route: ActivatedRoute,
    private moviesService: ListMovieDetailsService
  ){}

  ngOnInit():void {
    setTimeout(() => {
      this.route.params.subscribe(params =>{
        this.listMovieById(params["id"])
      })
    }, 1000);
  }

  listMovieById(movieId: number){
    this.moviesService.listMoviesDetails(movieId).subscribe((res) => this.movieD = res)
    this.moviesService.listMovieImages(movieId).subscribe((res) => this.movieImages = res)
    this.moviesService.listMoviesSocials(movieId).subscribe((res) => this.movieSocial = res)
    this.moviesService.listMovieCast(movieId).subscribe((res) => this.movieCredit = res)

    this.moviesService.listRecommendations(movieId).subscribe((res) =>
      this.recommended = res['results']
    )

    this.moviesService.listProviders(movieId).subscribe( (res) =>{
      this.watchProviders = res['results']['US']
    })
    this.moviesService.listReviews(movieId).subscribe((res: any) =>{
      this.reviews = res['results']
      this.authorReview  = res['results']['author_details']
    })
  }

  trackByFn(index, item){
    return item.uniqueValue;
  }
  setRate(rate: number){
    if(rate == 0 || rate <= 4.9){
      return 'bi bi-emoji-frown'
    }
    else if (rate == 5 || rate <=6.9){
      return 'bi bi-emoji-neutral'
    }
    else if(rate == 7 || rate <=8.9){
      return 'bi bi-emoji-smile'
    }
    else if(rate == 9 || rate <=10){
      return 'bi bi-emoji-laughing'
    }
    else{
      console.log('Rate is not valid.')
      return ''
    }
  }
}
