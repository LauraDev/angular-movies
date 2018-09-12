import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from './../../../models/Movie';
import { MovieService } from '../../../shared/services/Movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  
  @Input() movie: Movie;
  id: string;
  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService
  ) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if(this.id) this.movieService.getById(+this.id).subscribe(data => this.movie = data);
    });
  }

  public delete() {
    this.movieService.delete(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
  
}