import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class GifsService {

  constructor(private hC: HttpClient) { }

  getGifs(searchString) {
    return this.hC.get(`https://api.giphy.com/v1/gifs/search?api_key=tdPvAGDGFpN6JDD3qnOsNvdn3SkYALNf&q=${searchString}&limit=24`);
  }
}
