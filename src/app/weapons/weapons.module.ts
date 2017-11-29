import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WeaponsComponent } from './weapons.component';

import { WeaponTreeComponent } from './weapon-tree/weapon-tree.component';



import { WeaponsRoutingModule } from './weapons-routing.module';


@NgModule({
  declarations: [
    WeaponsComponent,

    WeaponTreeComponent

  ],

  imports:[ SharedModule, WeaponsRoutingModule ],
  exports: []

})


export class WeaponsModule { }
