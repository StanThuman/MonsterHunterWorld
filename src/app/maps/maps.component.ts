import { Component, OnInit } from '@angular/core';
import { MapsService } from '../core/maps.service';


@Component({
  templateUrl: './maps.component.html',
  styles: [`

    a, a:link, a:visited, a:hover {
      text-decoration: none;
      color: black;
    }
    `]
})

export class MapsComponent {
  maps: object[];

  constructor(private mapService: MapsService){}
  ngOnInit() :void {
    this.maps = this.mapService.getMapThumbnails();
  }
}
