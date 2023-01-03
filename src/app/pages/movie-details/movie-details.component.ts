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

  movie$!: Observable<IMovieDetails>
  trendingMovies!: IMovieDetails[]

  constructor(
    private route: ActivatedRoute,
    private moviesService: ListMovieDetailsService
  ){}

  ngOnInit() {
    // setTimeout(() => {
    //   this.route.params.subscribe(params =>{
    //     this.subMovies(params["id"])
    //   })
    // }, 1000);

    // this.movie$ = this.route.params.pipe(
    //   map(params => (params["id"])),
    //   switchMap(id => this.getMovieById(id),
    // ))
  }

  // subMovies(movieId: any){
  //   this.moviesService.listMoviesDetails(movieId).subscribe(res =>{
  //     this.trendingMovies = this.data
  //     console.log(this.trendingMovies)
  //   })
  // }

  // getMovieById(id: number): Observable<IMovieDetails>{

  //   const movie = this.trendingMovies.find(movie => movie.id == id);
  //   return movie === undefined ? throwError(() => new Error(`Não foi encontrado nenhum filme. ${id}`))
  //     : of (movie);
  // }
}
