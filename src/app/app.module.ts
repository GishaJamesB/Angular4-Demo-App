import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './book.service';
import { HouseService } from './house.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { HousesComponent } from './houses/houses.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ BookService, HouseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
