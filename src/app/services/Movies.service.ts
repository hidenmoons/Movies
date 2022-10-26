import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../Models/Movies.models';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7b4f8b68eemshf75240c9cf7b594p1233ebjsn5c3f389a8537',
      'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
    }
  };

 private apikey:string ="6bdDzgLqIsku9Jj7QwxCShk07EHe9jBUzGQD70JI";
 private  url: string = "https://movies-app1.p.rapidapi.com/api/movie/61e8a4c3f2eb8ced20633f4a";

  constructor(
    private httpClient:HttpClient,
  ) { }
  
    getMovie()
    {
     
      return this.httpClient.get<Movies>(`${this.url}`,this.options)
    }

}
