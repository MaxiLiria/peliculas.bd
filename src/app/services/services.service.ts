import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public movieData = {
    title: "",
    director: "",
    year: "",
    genre: "",
    foto: "",
    _id: ""
  };

  constructor(private http: HttpClient) { }
  getMovies(){
    return this.http.get('https://bd-peliculas.vercel.app/movies')
  }

  getMoviesById(_id: string){
    return this.http.get(`https://bd-peliculas.vercel.app/movies/id/${_id}`)
  }

  getMoviesByGenre(genre: string){
    return this.http.get(`https://bd-peliculas.vercel.app/movies/genre/Ficcion`)
  }

  getMoviesByGenere(genre: string){
    return this.http.get(`https://bd-peliculas.vercel.app/movies/genre/Animacion`)
  }

  getMoviesByGenero(genre: string){
    return this.http.get(`https://bd-peliculas.vercel.app/movies/genre/Terror`)
  }

  addMovie(movie: any) {
    return this.http.post('https://bd-peliculas.vercel.app/movies', movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`https://bd-peliculas.vercel.app/movies/${id}`);
  }

  changeMovie(movie: any) {
    this.movieData = movie;
  }

  putMovie(id: any, movie: any){
    return this.http.put(`https://bd-peliculas.vercel.app/movies/${id}`, movie)
  }

  
}


