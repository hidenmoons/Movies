import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/Movies.service';
import { Movies } from '../Models/Movies.models';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  movies: Movies|any;
  genres: Movies[] =[];
  constructor(
    private  _MovieServices: ServiceService
  ) { }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
   
  }
  Idmovie()
  {
   
  }
}
