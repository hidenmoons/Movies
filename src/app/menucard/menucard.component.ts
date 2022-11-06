import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../Models/Movies.models';
import { ServiceService } from '../services/Movies.service';
@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent implements OnInit {

  @Input() movie: Movies | any;
  constructor(
    private _MovieServices: ServiceService
  ) { }

  ngOnInit(): void {
   
  }

  mouse() {
    console.log('mouse');
  }
  Idmovie() {

  }
}
