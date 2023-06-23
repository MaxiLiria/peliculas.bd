import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  movies!: any[]
  filtroList: any[] = [];

  constructor (private api: ServicesService) {}
   filtrar(filtro:any){
    this.filtroList=this.movies.filter((movie)=> movie.title.toLowerCase().includes(filtro))
   console.log(filtro);
   
   }
  ngOnInit(): void {
    this.api.getMovies().subscribe((data: any) => {
      this.movies = [...data];
      this.filtroList = [...data];
    })
  }
}
