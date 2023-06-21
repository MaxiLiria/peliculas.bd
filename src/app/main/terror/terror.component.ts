import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.scss']
})
export class TerrorComponent implements OnInit{
  console = console
  
  genre!: any
  movies!: any

  constructor (private api: ServicesService) { }

  ngOnInit(): void {
      this.api.getMoviesByGenero(this.genre).subscribe((data:any) => {
        this.movies = data;
      }) 
    }
}
