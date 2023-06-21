import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.component.html',
  styleUrls: ['./animacion.component.scss']
})
export class AnimacionComponent implements OnInit{
  console = console
  
  genre!: any
  movies!: any

  constructor (private api: ServicesService) { }

  ngOnInit(): void {
      this.api.getMoviesByGenere(this.genre).subscribe((data:any) => {
        this.movies = data;
      }) 
    }
}
