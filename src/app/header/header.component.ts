import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { Movies } from '../Models/Movies.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 @Input() movie: Movies|any;

  constructor() { }

  ngOnInit(): void {
  }

}
