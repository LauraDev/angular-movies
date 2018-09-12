import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../../../models/Movie';
import { MovieService } from '../../../shared/services/Movie';
import { ActorService } from '../../../shared/services/Actor';
import { GenreService } from '../../../shared/services/Genre';
import { DirectorService } from '../../../shared/services/Director';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  
  public movie: Movie;
  public submitted: boolean;
  public directorsList: Array<string>;
  public actorsList: Array<string>;
  public genresList: Array<string>;
  id: string

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public movieService: MovieService,
    public actorService: ActorService,
    public genreService: GenreService,
    public directorService: DirectorService
  ) {
    this.submitted = false;
    this.actorService.getAll().subscribe(data => this.actorsList = data);
    this.genreService.getAll().subscribe(data => this.genresList = data);
    this.directorService.getAll().subscribe(data => this.directorsList = data);
  }
  
    ngOnInit() {
      this.newMovie()
    }

  onSubmit() {
    if(this.movie.id !== -1) {
      this.movieService.update(this.movie).subscribe(() => {
        this.router.navigate(['/movie/' + this.movie.id]);
      });
    } else {
      let lastId: number;
      this.movieService.getAll().subscribe(data => {
        lastId = +data[data.length-1].id +1;
        alert(lastId)
        this.movie.id = lastId
        this.movieService.add(this.movie).subscribe(() => {
          this.router.navigate(['/movie/' + this.movie.id]);
        });
      })
    }
  }

  newMovie() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
      this.movieService.getById(+this.id).subscribe(data => this.movie = data);
      } else {
        this.movie = new Movie(-1, '', '', [], [], []);
      }
    })
  }

}
