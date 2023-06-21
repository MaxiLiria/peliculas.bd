import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  console = console
  
  genre!: any
  movies!: any

  constructor (private api: ServicesService) { }

  ngOnInit(): void {
      this.api.getMoviesByGenre(this.genre).subscribe((data:any) => {
        this.movies = data;
      }) 
    }

  }
