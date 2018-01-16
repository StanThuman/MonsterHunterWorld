import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps.component';
import { MapsRoutingGuard } from './maps-routing.guard';
import { MapDetailsComponent } from './map-details/map-details.component';

//import { CanActivateWeaponType, CanActivateWeapon } from './weapons-routing.guard';

const mapRoutes: Routes = [
  { path: 'maps', component: MapsComponent},
  { path: 'maps/:mapname', component: MapDetailsComponent, canActivate: [ MapsRoutingGuard ] }
]


@NgModule({
  imports: [
    RouterModule.forChild(mapRoutes)
  ],
  providers: [ MapsRoutingGuard ],
  exports: [ RouterModule ]
})


export class MapsRoutingModule {}
