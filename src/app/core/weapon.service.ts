import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WEAPONTYPES } from './data/mock-weapons';

@Injectable()
export class WeaponService{

  //holds selected weapon for next page
  weapon: string;

  constructor(private router: Router, private route: ActivatedRoute){

    route.params.subscribe(route => {
      console.log(this);
    })

  }

  getAllWeaponTypes(): object {
    return {
      blademaster: WEAPONTYPES.blademaster,
      gunner: WEAPONTYPES.gunner
    }
  }

  getWeaponType(weaponType: string): string[] {
    return WEAPONTYPES[weaponType];
      //gunner: GUNNERTYPES

  }
  //
  // getGunnerWeaponTypes(): string[] {
  //   return GUNNERTYPES
  //
  // }

  getWeapon(): string {

      return this.weapon;
  }


  getWeaponTypeUrls(weaponType: string): string[] {

    let weaponLinks: string[] = WEAPONTYPES[weaponType];

    // //remove spaces
    weaponLinks = weaponLinks.map( x => x.replace(/\s/g, ''));

    //console.log(weaponLinks);

    return weaponLinks;
  }



  setWeapon(weaponType: string, index: number): void {

    this.weapon = WEAPONTYPES[weaponType][index];
    console.log(this.weapon = WEAPONTYPES[weaponType][index]);
  }


}
