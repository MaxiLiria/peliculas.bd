import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../interfaces/model';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private valorEstrellas: Map<string, number> = new Map<string, number>();

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
  guardarValorEstrellas(_id:any, valor: number) {
    this.valorEstrellas.set(_id,valor);
  }

  obtenerValorEstrellas(_id:any): number {
    return this.valorEstrellas.get(_id) || 0;
  }
  
  register(user: UserI){
    return this.http.post(`https://bd-peliculas.vercel.app/users/register`, user)
  }

  login(user: UserI){
    return this.http.post(`https://bd-peliculas.vercel.app/users/login`, user)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  
}
