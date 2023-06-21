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
    return this.http.get('http://localhost:3000/movies')
  }

  getMoviesById(_id: string){
    return this.http.get(`http://localhost:3000/movies/id/${_id}`)
  }

  getMoviesByGenre(genre: string){
    return this.http.get(`http://localhost:3000/movies/genre/Ficcion`)
  }

  getMoviesByGenere(genre: string){
    return this.http.get(`http://localhost:3000/movies/genre/Animacion`)
  }

  getMoviesByGenero(genre: string){
    return this.http.get(`http://localhost:3000/movies/genre/Terror`)
  }

  addMovie(movie: any) {
    return this.http.post('http://localhost:3000/movies', movie);
  }

  deleteMovie(id: number) {
    return this.http.delete(`http://localhost:3000/movies/${id}`);
  }

  changeMovie(movie: any) {
    this.movieData = movie;
  }

  putMovie(id: any, movie: any){
    return this.http.put(`http://localhost:3000/movies/${id}`, movie)
  }

  
}


