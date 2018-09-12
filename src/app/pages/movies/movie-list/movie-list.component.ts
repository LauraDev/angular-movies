import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../shared/services/Movie';
import { GenreService } from '../../../shared/services/Genre';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  public genre: string
  public movies: Array<Movie>;
  public genres: Array<string>; 
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public movieService: MovieService,
    public genreService: GenreService
  ) { 
    this.genreService.getAll().subscribe(data => this.genres = data);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.genre = params.get('genre');
      if(this.genre) {
        this.movieService.getByGenre(this.genre).subscribe(data => this.movies = data);
      }
      else {
        this.movieService.getAll().subscribe(data => this.movies = data )
      }
    });
  }

}
