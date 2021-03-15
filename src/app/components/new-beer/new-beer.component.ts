import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerI } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent implements OnInit {

  beer: BeerI = {
    name: '',
    mL: 0,
    container: ''
  };

  constructor(private beerService: BeerService, private router: Router) { }

  ngOnInit(): void {  }

  save() {
    this.beerService.saveBeer(this.beer).subscribe(response => {
      Swal.fire({
        icon: 'success',
        title: 'Cerveza ' + this.beer.name + ' registrada con exito!',
      });
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
    });
  }
}