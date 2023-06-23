import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-films-detail',
  templateUrl: './films-detail.component.html',
  styleUrls: ['./films-detail.component.scss']
})

export class FilmsDetailComponent implements OnInit{
  _id!: any
  movies!: any
  valorEstrellas!: number;
  constructor (private service: ServicesService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this._id = params.get('_id') || "1"

      this.valorEstrellas = this.service.obtenerValorEstrellas(this._id) || 0;
  
      })

      this.service.getMoviesById(this._id).subscribe((data:any) => {
        this.movies = data;
      }) 
    }
    deleteMovie(){
      this.service.deleteMovie(this._id).subscribe((data:any) => {
        alert("Movie eliminado")
        this.router.navigate(["movies"])
      })
    }

    changeMovie(movie:any){
      this.service.changeMovie(movie);
      this.router.navigate(["agregar"])
    }

    guardarValorEstrellas() {
      this.service.guardarValorEstrellas(this._id, this.valorEstrellas);
    }
}
