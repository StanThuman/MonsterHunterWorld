//import {} from '';

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


export class CanActivateWeapon implements CanActivate {
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean {

    console.log(route.params.weapon);
    //console.log(RouterStateSnapshot);

  return true;//this.permissions.canActivate(this.currentUser, route.params.id);
}

}
