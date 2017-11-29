import { Injectable } from '@angular/core';



@Injectable()
export class WeaponService{

  currentWeapon: string;

  constructor(){}

  getWeapon(): string {
      return this.currentWeapon;
  }

  setWeapon(weaponName: string): void {
    this.currentWeapon = weaponName;
  }


}
