import { Component, OnInit } from '@angular/core';
import { MAPS } from './mock-maps';


@Component({
  templateUrl: './maps.component.html',
  styles: [`
    .map-margins{
      margin-bottom:20px;
    }
    .text-padding{
      padding: 0.75em;
    }
    `]
})

export class MapsComponent {
  maps: string[];

  ngOnInit() :void {
    this.maps = MAPS;
  }
}
