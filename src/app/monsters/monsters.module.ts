import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MonstersComponent } from './monsters.component';
import { MonstersRoutingModule } from './monsters-routing.module';
import { MonsterDetailsComponent } from './monster-details/monster-details.component';

@NgModule({
  declarations: [
    MonstersComponent,
    MonsterDetailsComponent
  ],
  imports: [ MonstersRoutingModule, SharedModule ]

})

export class MonstersModule {}
