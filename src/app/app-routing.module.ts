import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { HomeComponent } from './home/home.component';
import { AddFilmComponent } from './addMovie/add-film.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


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
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
