import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { HomeComponent } from './home/home.component';
import { AddFilmComponent } from './addMovie/add-film.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'movies', component: FilmsComponent
  },
  
  {
    path:'movies/:_id', component: FilmsDetailComponent
  },
  {
    path:'agregar', component: AddFilmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
