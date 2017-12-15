import { Injectable } from '@angular/core';
import { MAPS } from './data/mock-maps';




@Injectable()
export class MapService {

  currentArmorRank: string;

  constructor(){}

  getMaps(): object[] {
    return MAPS;
  }
}
