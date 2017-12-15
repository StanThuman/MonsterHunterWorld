import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps.component';
import { MapDetailsComponent } from './map-details/map-details.component';
//import { CanActivateWeaponType, CanActivateWeapon } from './weapons-routing.guard';

const mapRoutes: Routes = [
  { path: 'maps', component: MapsComponent},
  { path: 'maps/:mapname', component: MapDetailsComponent }
  // {
  //   path: 'weapons/:weaponType',
  //   component : WeaponsComponent,
  //   canActivate: [ CanActivateWeaponType ]
  // },
  //
  // {
  //   path: 'weapons/:weaponType/:weapon',
  //   component: WeaponTreeComponent,
  //   canActivate: [CanActivateWeapon]
  // }
]


@NgModule({
  imports: [
    RouterModule.forChild(mapRoutes)
  ],
  providers: [ ],
  exports: [ RouterModule ]
})


export class MapsRoutingModule {}
