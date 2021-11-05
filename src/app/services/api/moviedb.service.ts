import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopRated } from 'src/app/interfaces/top-rated/top-rated';

// Required credentials to call an API
import creds from '../../config/api_details.json';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor(private http: HttpClient) { }
  // BASE URL 
  private BASE_URL = creds.BASE_URL;

  // API KEY
  private API_KEY = creds.API_KEY;

  private top_rated_route = "/movie/top_rated";
  top_rated(page_number : string) : Observable<TopRated> {
    return this.http.get<TopRated>(`${this.BASE_URL}${this.top_rated_route}?api_key=${this.API_KEY}&language=en-US&page=${page_number}`);
  }
}
