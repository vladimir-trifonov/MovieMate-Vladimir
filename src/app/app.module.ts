import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviePosterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
