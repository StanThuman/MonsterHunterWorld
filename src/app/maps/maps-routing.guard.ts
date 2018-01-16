import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MapsService } from '../core/maps.service';
import { UtilityRoutingService } from '../core/utility-routing.service';


@Injectable()
export class MapsRoutingGuard implements CanActivate {

  constructor(private mapsService: MapsService, private router: Router){}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean {

    let  isUrlValid:boolean = true;

    isUrlValid = UtilityRoutingService.checkUrlValid(route.params.mapname,
      this.mapsService.getMapThumbnails());

    if(!isUrlValid)
      this.router.navigate(['/error']);

    return isUrlValid;
  }  //end function

}
