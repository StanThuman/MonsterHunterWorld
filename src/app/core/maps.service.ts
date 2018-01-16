import { Injectable } from '@angular/core';
import { MAPS } from './data/mock-maps';




@Injectable()
export class MapsService {



  constructor(){}

  getMapThumbnails(): object[] {
    return MAPS;
  }


  getMap(picName: string): string {
    let isFound = false;

    let counter = -1;

    while(!isFound && counter < MAPS.length){
      counter++;

    }

    return "";
  }


}
