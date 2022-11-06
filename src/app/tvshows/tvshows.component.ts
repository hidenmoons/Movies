import { Component, OnInit,Input } from '@angular/core';
import { ServiceService } from '../services/Movies.service';
import { Movies } from '../Models/Movies.models';
@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent implements OnInit {

  @Input() movies: Movies|any;
  @Input() img: string|any;
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
