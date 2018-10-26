import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor( private ofertasService: OfertasService ) { }

  ngOnInit() {

    this.ofertasService.getOfertaPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      this.ofertas = ofertas
    })
    .catch((param: any) => {
      console.log(param)
    })
  }

}