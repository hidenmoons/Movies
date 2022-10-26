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
 private  url: string = "https://api.themoviedb.org/3/movie/550?api_key=4d520adbec9ce27e3b4d7ca6ec6657b2";

  constructor(
    private httpClient:HttpClient,
  ) { }
  
    getMovie()
    {
     
      return this.httpClient.get<Movies>(`${this.url}`)
    }

}
