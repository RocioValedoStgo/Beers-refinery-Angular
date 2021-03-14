import { Component, OnInit } from '@angular/core';
import { BeerI } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  beers: any = [];
  
  constructor(private beerService: BeerService) {  }

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers() {
    this.beerService.indexBeers().subscribe(response => {
      this.beers = response;
      console.log(this.beers);
    }, (error) => {
      console.log(error);
    });
  }

  delete(id: number) {
    this.beerService.destroyBeer(id).subscribe(response => {
      console.log(response);
      this.getBeers();
      alert('Cerveza con ID: ' + id + ' ha sido eliminada');
    }, error => {
      console.log(error);
    });
  }
}