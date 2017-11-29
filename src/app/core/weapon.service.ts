import { Injectable } from '@angular/core';

@Injectable()
export class WeaponService{

  //holds selected weapon for next page
  currentWeapon: string;

  constructor(){}

  getWeapon(): string {
      return this.currentWeapon;
  }

  setWeapon(weaponName: string): void {
    this.currentWeapon = weaponName;
  }


}
