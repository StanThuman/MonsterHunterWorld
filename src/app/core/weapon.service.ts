import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class WeaponService{

  //holds selected weapon for next page
  weapon: string;

  constructor(private router: Router, private route: ActivatedRoute){
    console.log(route);
    route.params.subscribe(route => {
    console.log(route);
      // this.weaponTypeTitle = route.weaponType;
      // this.loadWeaponType(route.weaponType);
      // //temp fix
      // if(this.weaponTypeTitle === 'blademaster')
      //   this.currentWeaponType = this.bladeMasterTypes;
      //
      // if(this.weaponTypeTitle === 'gunner')
      //   this.currentWeaponType = this.gunnerTypes;
      //
      //
      // for(let i = 0; i < this.currentWeaponType.length; i++)
      //   this.linkTypes.push(this.currentWeaponType[i].replace(/\s/g, ''));

    })

  }

  getWeapon(): string {

      console.log("inside service");
      // console.log(this.router);




      // console.log(this.router)
      return this.weapon;
  }

  setWeapon(weaponName: string): void {


    this.weapon = weaponName;
  }


}
