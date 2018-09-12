export class Movie {
  constructor(
    public id: number,
    public title: string,
    public poster: string,
    public directors: Array<string>,
    public actors: Array<string>,
    public genres: Array<string>,
    public synopsis?: string
  ) {

  }
}