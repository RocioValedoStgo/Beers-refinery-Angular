import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BeerI } from 'src/app/interfaces/beer';
import { BeerService } from 'src/app/services/beer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {

  beer: BeerI = {
    name: '',
    mL: 0,
    container: ''
  };
  id: number = 0;

  constructor(private beerService: BeerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.beerService.showBeer(this.id).subscribe(response => {
      this.beer = response;
    }, error => {
      console.log(error);
    });
  }

  update() {
    this.beerService.updateBeer(this.beer).subscribe(response => {
      Swal.fire({
        icon: 'success',
        title: 'Cerveza ' + this.beer.name + ' actualizada con exito!',
      });
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
    });
  }
}
