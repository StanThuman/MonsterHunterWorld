import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArmorComponent } from './armor.component'
//import { WeaponTreeComponent } from './weapon-tree/weapon-tree.component';
import { ArmorGuard } from './armor-routing.guard';
//import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

//import { WeaponService } from '../core/weapon.service';

const armorRoutes: Routes = [
  {
    path: 'armor',
    pathMatch: 'full',
    redirectTo: 'armor/grank'
  },
  {
    path: 'armor/:armorRank',    
    component : ArmorComponent,
    canActivate: [ ArmorGuard ]
  }


];

@NgModule({
  imports: [
    RouterModule.forChild(armorRoutes)
  ],
  providers: [ ArmorGuard ],
  exports: [ RouterModule ]
})


export class ArmorRoutingModule {}
