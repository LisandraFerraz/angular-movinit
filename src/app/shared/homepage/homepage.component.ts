import { Component, OnInit } from '@angular/core';
import { ListMediaService } from '../services/list-media.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  lang: string

  trendingMovies: any
  trendingMoviesGenres: string;

  constructor(private listMediaService: ListMediaService) {}

  ngOnInit() {
    this.listTrendingMovies();
  }

  listTrendingMovies() {
    this.listMediaService.listTrendingMovies().subscribe((res) => {
      this.trendingMovies = res['results'];
      // this.trendingMoviesGenres = res['results']['original_language'];
    });
  }

  getLanguage(object){
    if (object == "en"){
      return 'eng'
    }
    else if (object == "es"){
      return 'esp'
    }
    else if (object == "pt"){
      return 'port'
    }
    return ''
  }
}
