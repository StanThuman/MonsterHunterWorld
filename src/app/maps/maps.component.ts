import { Component, OnInit } from '@angular/core';
import { MapService } from '../core/map.service';


@Component({
  templateUrl: './maps.component.html',
  styles: [`
    .map-margins{
      margin-bottom:20px;
    }
    .text-padding{
      padding: 0.75em;
    }
    a, a:link, a:visited, a:hover {
      text-decoration: none;
      color: black;
    }
    `]
})

export class MapsComponent {
  maps: object[];

  constructor(private mapService: MapService){}
  ngOnInit() :void {
    this.maps = this.mapService.getMaps();
  }
}
