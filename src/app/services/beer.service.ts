import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BeerI } from '../interfaces/beer';

@Injectable({
  providedIn: 'root'
})

export class BeerService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  indexBeers() {
    return this.http.get<BeerI>(`${this.baseUrl}/beers`, this.httpOptions);
  }

  saveBeer(beer: BeerI) {
    return this.http.post<BeerI>(`${this.baseUrl}/beers`, beer, this.httpOptions);
  }
}