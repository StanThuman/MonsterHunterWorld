//import {} from '';

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { WeaponService } from '../core/weapon.service';


@Injectable()
export class CanActivateWeaponType implements CanActivate {

  constructor(private router: Router){}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean {

    let  isUrlValid:boolean = false;

    console.log("Can activate weapon TYPE");

    //should be blademaster or gunner
    let subUrl: string = route.params.weaponType.toLowerCase();

    if (subUrl === "blademaster" || subUrl === "gunner")
      isUrlValid = true;

    if(!isUrlValid)
      this.router.navigate(['/error']);

    //TODO redirect to errorpage

    return isUrlValid;
  }  //end function

}//end class

@Injectable()
export class CanActivateWeapon implements CanActivate {

  constructor(private router: Router, private weaponService : WeaponService){}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean {
    // let isUrlValid:boolean = false;
    let subUrl: string = route.params.weapon.toLowerCase();
    console.log("Can activate weapon");
    console.log(subUrl);
    //this.weaponService.getWeaponUrls();


    let isUrlValid:boolean = this.checkUrl(subUrl, state.url);

  //console.log(isUrlValid);

    return isUrlValid;//this.permissions.canActivate(this.currentUser, route.params.id);
  }


  checkUrl(weapon: string, url: string): boolean {


    let selectedWeaponType: string[];
    let weaponIsFound: boolean = false;
    let searchWeaponResults;

    if(url.includes("blademaster")){
      selectedWeaponType = this.weaponService.getWeaponTypeUrls("blademaster");
      searchWeaponResults = this.checkIfWeaponExists(weapon, selectedWeaponType);
      weaponIsFound = searchWeaponResults.weaponIsFound;

      if(weaponIsFound)
        this.weaponService.setWeapon("blademaster", searchWeaponResults.weaponCounter);
    }


    if(url.includes("gunner") && !weaponIsFound){
      selectedWeaponType = this.weaponService.getWeaponTypeUrls("gunner");
      searchWeaponResults = this.checkIfWeaponExists(weapon, selectedWeaponType);
      weaponIsFound = searchWeaponResults.weaponIsFound;

      if(weaponIsFound)
        this.weaponService.setWeapon("gunner", searchWeaponResults.weaponCounter);

    }

    return weaponIsFound;
  }

  checkIfWeaponExists(weapon: string, weaponTypeList: string[]):
    { weaponIsFound: boolean, weaponCounter: number } {
    let weaponIsFound = false;
    let weaponCounter = -1;

    while(!weaponIsFound && weaponCounter < weaponTypeList.length){
      weaponCounter++;

      if(weapon == weaponTypeList[weaponCounter])
        weaponIsFound = true;

    }


    return {weaponIsFound: weaponIsFound, weaponCounter: weaponCounter};
  }

}
