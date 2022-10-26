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
    private  MovieService: ServiceService
  ) { }

  ngOnInit(): void {
    this.MovieService.getMovie().subscribe(data=>
      {
        this.movies = data
        
        console.log("data",data, "generos:",this.genres);
        
     }
      )      
  }

  ngOnDestroy(): void {
   
  }

}
