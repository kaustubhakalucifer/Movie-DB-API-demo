import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../services/api/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // set selected value
  selected = 'top_rated';
  constructor(private api_service: MoviedbService) { }

  ngOnInit(): void {
    this.api_service.top_rated('1').subscribe((response:any) => {
      console.log(response);
    })
  }

  dropdownChange(event : any) {
    console.log(event);
  }

}
