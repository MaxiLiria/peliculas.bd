import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmsDetailComponent } from './films-detail/films-detail.component';
import { HomeComponent } from './home/home.component';
import { AnimacionComponent } from './main/animacion/animacion.component';
import { TerrorComponent } from './main/terror/terror.component';
import { AddFilmComponent } from './addMovie/add-film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModifyComponent } from './modify/modify.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FilmsComponent,
    FilmsDetailComponent,
    HomeComponent,
    AnimacionComponent,
    TerrorComponent,
    AddFilmComponent,
    ModifyComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
