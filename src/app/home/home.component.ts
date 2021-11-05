import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TopRated } from '../interfaces/top-rated/top-rated';
import { MoviedbService } from '../services/api/moviedb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // set selected value
  selected = 'top_rated';
  response_result : TopRated = {
    page: 0,
    results: [],
    total_results: 0,
    total_pages: 0
  };
  
  constructor(private api_service: MoviedbService) { }

  ngOnInit(): void {
    this.api_service.top_rated('1').subscribe(response => {
      this.response_result = response;
      console.log(response);
    },(error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  dropdownChange(event : any) {
    console.log(event);
  }

}
