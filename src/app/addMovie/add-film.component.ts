import { ServicesService } from 'src/app/services/services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.scss']
})
export class AddFilmComponent implements OnInit {
movieForm!: FormGroup;

constructor(private formBuilder: FormBuilder,private service: ServicesService,private router: Router) {}

  public newMovie = this.service.movieData;
  public movieId = this.service.movieData._id;
  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      title: [this.newMovie.title, [Validators.required]],
      director: [this.newMovie.director, [Validators.required]],
      year: [this.newMovie.year, [Validators.required]],
      genre: [this.newMovie.genre, [Validators.required]],
      foto: [this.newMovie.foto, [Validators.required]],
      
    });
    this.movieForm.valueChanges.subscribe((changes) => {
      // console.log(changes);
      this.newMovie = changes;
    });
  }
  onSubmit() {
    if (this.movieId !== "") {
      this.service.putMovie(this.movieId, this.newMovie).subscribe();
      alert('Movie Editada');
      this.router.navigate(['movies']);
    } else {
      this.service.addMovie(this.newMovie).subscribe();
      alert('Movie creada');
      this.router.navigate(['movies']);
    }
     
      this.movieForm.reset();
    }
  }
