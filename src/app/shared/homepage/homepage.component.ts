import { Component, OnInit } from '@angular/core';
import { ListMediaService } from '../services/list-media.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingMoviesGenres: Array<any>;
  constructor(private listMediaService: ListMediaService) {}
  ngOnInit() {
    this.listTrendingMovies();
  }

  listTrendingMovies() {
    this.listMediaService.listTrendingMovies().subscribe((res) => {
      this.trendingMovies = res['results'];
      this.trendingMoviesGenres = res['results']['genre_ids'];
    });
  }
}
