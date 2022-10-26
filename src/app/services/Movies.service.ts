import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../Models/Movies.models';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

 private apikey:string ="6bdDzgLqIsku9Jj7QwxCShk07EHe9jBUzGQD70JI";
 private  url: string = "https://api.watchmode.com/v1/title/345534/details/?apiKey="+this.apikey+"&append_to_response=sources";

  constructor(
    private httpClient:HttpClient,
  ) { }
  
    getMovie()
    {
     
      return this.httpClient.get<Movies>(`${this.url}`)
    }

}
