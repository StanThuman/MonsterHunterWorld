import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MonstersComponent } from './monsters.component';

@NgModule({
  declarations: [
    MonstersComponent
  ],
  imports: [ SharedModule ]

})

export class MonstersModule {}
