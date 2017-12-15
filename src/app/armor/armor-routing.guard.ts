import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';



@Injectable()
export class ArmorGuard implements CanActivate {


  constructor(private router: Router){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean {
    console.log("inside armor routing guard");
    let armorRankUrl: string = route.params.armorRank.toLowerCase();
    let isArmorRankUrlValid = false;

    if(armorRankUrl == 'grank' || armorRankUrl == 'highrank'
      || armorRankUrl == 'lowrank')
      isArmorRankUrlValid = true;

      if(!isArmorRankUrlValid)
        this.router.navigate(["/error"]);

    return isArmorRankUrlValid;
  }

}
