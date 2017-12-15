import { Injectable } from '@angular/core';
import { LowArmorList, HighArmorList, GArmorList } from '../core/data/mock-armors';
import { Armor } from '../armor/armor';



@Injectable()
export class ArmorService {

  currentArmorRank: string;

  constructor(){}

  getArmor(armorRank: string ): Armor[] {
    let armorList:Armor[];
    this.currentArmorRank = armorRank;

    switch(armorRank){
        case 'lowrank':
          armorList = LowArmorList;
          break;

        case 'highrank':
          armorList = HighArmorList;
          break;

        case 'grank':
          armorList = GArmorList;
          break;

        default:
          console.log("an error has occurred retrieving the armor");
          break;
    }

    return armorList;

  }

  getCurrentArmorRank(){
    return this.currentArmorRank;
  }


}
