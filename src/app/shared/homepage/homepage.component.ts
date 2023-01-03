import { sequence, animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Genres } from 'src/app/utils/interfaces/genres';
import { TrendingMovies } from 'src/app/utils/interfaces/trending';
import { ListMediaService } from '../services/list-media.service';
import AOS from "aos";
import {  PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  genreName: string
  movie$ = new Subject();

  trendingMovies: TrendingMovies[]
  moviesPosters: any[]=[]
  genresList: Genres[]

  constructor(private listMediaService: ListMediaService, @Inject(PLATFORM_ID) private platformId: Object) {}

  // @HostListener('window:scroll', ['$event'])
  // fadeInItems(){
  //   let cardsTrending = document.querySelector('.cards-container') as HTMLElement;
  //   if(window.pageYOffset > cardsTrending.clientHeight){
  //     cardsTrending.classList.add('onScroll')
  //   }else{
  //     cardsTrending.classList.remove('onScroll')
  //   }
  // }

  ngOnInit() {
    this.listTrendingMovies();
    this.listGenres()
    this.listMoviesPosters()
    if (isPlatformBrowser(this.platformId)) { AOS.init(); }
  }

  listTrendingMovies() {
    this.listMediaService.listTrendingMovies().subscribe((res) => {
      this.trendingMovies = res['results'];
    });
  }

  listMoviesPosters(){
    this.listMediaService.listMoviesPosters(550).subscribe((res)=>{
      this.moviesPosters = res['posters']

      console.log(this.moviesPosters)
    })
  }

  listGenres(){
    this.listMediaService.listMovieGenres().subscribe((res) =>{
      this.genresList = res['genres']
    })
  }

  findGenre(genreId){
    this.genresList.forEach((obj) =>{
      if (genreId == obj.id){
        this.genreName = obj.name
        // console.log(obj.name)
      }
    })
  }

  getLanguage(lang){
    if (lang == "en"){
      return 'eng'
    }
    else if (lang == "es"){
      return 'esp'
    }
    else if (lang == "pt"){
      return 'port'
    }
    return ''
  }
}
