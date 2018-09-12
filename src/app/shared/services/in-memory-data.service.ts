import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOVIES } from '../../../assets/data/movies.data';
import { ACTORS } from '../../../assets/data/actors.data';
import { DIRECTORS } from '../../../assets/data/directors.data';
import { GENRES } from '../../../assets/data/genres.data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const movies = MOVIES;
        const actors = ACTORS;
        const directors = DIRECTORS;
        const genres = GENRES;
        return {movies, actors, directors, genres};
    }
}