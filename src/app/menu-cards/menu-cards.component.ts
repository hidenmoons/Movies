import { Component, OnInit } from '@angular/core';
import { Movies } from '../Models/Movies.models';
import { ServiceService } from '../services/Movies.service';

@Component({
  selector: 'app-menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.scss']
})
export class MenuCardsComponent implements OnInit {
  movies: Movies[]=[];
  constructor(
    private _MovieServices: ServiceService
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 3; i++) {
      this._MovieServices.getMovie().
        subscribe((data) => {

          this.movies.push(data)
          
        })

    }
    console.log(this.movies)
  }

}
