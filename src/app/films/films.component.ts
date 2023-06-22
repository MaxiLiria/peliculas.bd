import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  movies!: any[]

  constructor (private api: ServicesService) {}

  ngOnInit(): void {
    this.api.getMovies().subscribe((data: any) => {
      this.movies = [...data];
    })
  }
}
