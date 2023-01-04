import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap, throwError } from 'rxjs';
import { ListMovieDetailsService } from 'src/app/shared/services/list-movie-details.service';
import { IMovieDetails } from 'src/app/utils/interfaces/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  movieD: IMovieDetails | undefined

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
    this.moviesService.listMoviesDetails(movieId).subscribe((data:IMovieDetails) => this.movieD = data)
  }
}
