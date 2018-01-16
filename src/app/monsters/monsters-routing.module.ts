import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonstersComponent } from './monsters.component'
import { MonsterDetailsComponent } from './monster-details/monster-details.component';

const monsterRoutes: Routes = [
  {
    path: 'monsters',
    //pathMatch: '',
    component : MonstersComponent,
    //canActivate: [ CanActivateWeaponType ]
  },

  {
    path: 'monsters/:monsterName',
    component: MonsterDetailsComponent,
    //canActivate: [CanActivateWeapon]
  },



]


@NgModule({
  imports: [
    RouterModule.forChild(monsterRoutes)
  ],
  //providers: [ CanActivateWeaponType, CanActivateWeapon ],
  exports: [ RouterModule ]
})


export class MonstersRoutingModule {}
