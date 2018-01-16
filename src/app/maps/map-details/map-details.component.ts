import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapsService } from '../../core/maps.service';

@Component({
  templateUrl: './map-details.component.html',
  styles: [`

    img {
      border: 1px solid black;
      width: 100%;
      height: 100%;

    }

    .outline1 {
      border: 1px solid red;
    }

    .outline2 {
      border: 1px solid green;
    }
    `]

})

export class MapDetailsComponent {
  imgSrc: string;

  constructor(private route: ActivatedRoute, private mapsService: MapsService){

    route.params.subscribe( url => {
      console.log(url);
      this.mapsService.getMap(url.mapname);

    });

    this.imgSrc = "assets/maps/ancestral_steppe.jpg";
  }
}
