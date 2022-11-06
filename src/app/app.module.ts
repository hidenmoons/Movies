import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import {  FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { TvshowsComponent } from './tvshows/tvshows.component';
import { MenucardComponent } from './menucard/menucard.component';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TvshowsComponent,
    MenucardComponent,
   
    MenuCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
