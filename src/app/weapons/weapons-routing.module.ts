import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeaponsComponent } from './weapons.component'
import { WeaponTreeComponent } from './weapon-tree/weapon-tree.component';
import { CanActivateWeaponType, CanActivateWeapon } from './weapons-routing.guard';
//import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

//import { WeaponService } from '../core/weapon.service';

const weaponsRoutes: Routes = [
  {
    path: 'weapons/:weaponType',
    //pathMatch: '',
    component : WeaponsComponent,
    canActivate: [ CanActivateWeaponType ]
    //partial views within weapon(reworked it)
  //   children: [
  // //    { path: '', redirectTo: 'blademaster', pathMatch: 'full'},
  //     { path: 'blademaster', component : WeaponTreeComponent },
  //     { path: 'gunner', component : WeaponTreeComponent }
  //   ]
  },

  {
    path: 'weapons/:weaponType/:weapon',
    component: WeaponTreeComponent,
    canActivate: [CanActivateWeapon]
  },
  // {
  //   path: 'weapons/gunner/:weapon',
  //   component: WeaponTreeComponent,
  //   canActivate: [CanActivateWeapon],
  // },
//{ path: 'weapons/**', component: PageNotFoundComponent }


]


@NgModule({
  imports: [
    RouterModule.forChild(weaponsRoutes)
  ],
  providers: [ CanActivateWeaponType, CanActivateWeapon ],
  exports: [ RouterModule ]
})


export class WeaponsRoutingModule {}
