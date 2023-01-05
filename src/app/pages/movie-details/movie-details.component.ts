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

  constructor(
    private route: ActivatedRoute,
    private moviesService: ListMovieDetailsService
  ){}

  ngOnInit():void {
    setTimeout(() => {
      this.route.params.subscribe(params =>{
        this.listMovieById(params["id"])
        this.listMovieSocials(params["id"])
        this.listMovieCast(params["id"])
        this.listMovieImages(params["id"])
      })
    }, 1000);
  }

  listMovieById(movieId: number){
    this.moviesService.listMoviesDetails(movieId).subscribe((data: any) => this.movieD = data)
  }

  listMovieSocials(movieId:number){
    this.moviesService.listMoviesSocials(movieId).subscribe((data: any) => this.movieSocial = data)
  }

  listMovieCast(movieId: number){
    this.moviesService.listMovieCast(movieId).subscribe((data: any) => this.movieCredit = data)
  }

  listMovieImages(movieId: number){
    this.moviesService.listMovieImages(movieId).subscribe((data: any) => this.movieImages = data)
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
