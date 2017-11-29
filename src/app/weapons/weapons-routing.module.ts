import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeaponsComponent } from './weapons.component'

import { WeaponTreeComponent } from './weapon-tree/weapon-tree.component';



const weaponsRoutes: Routes = [
  { path: 'weapons/:weaponType', component : WeaponsComponent,
    //partial views within weapon(reworked it)
    // children: [
    //   { path: '', redirectTo: 'blademaster', pathMatch: 'full'},
    //   { path: 'blademaster', component : WeaponTypeComponent },
    //   { path: 'gunner', component : WeaponTypeComponent }
    // ]
  },
  { path: 'weapons/:weapontype/:weapon',
    pathMatch: 'full', component: WeaponTreeComponent}
]


@NgModule({
  imports: [
    RouterModule.forChild(weaponsRoutes)
  ],
  exports: [ RouterModule ]
})


export class WeaponsRoutingModule {}
