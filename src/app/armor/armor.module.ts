import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { ArmorRoutingModule } from './armor-routing.module';
import { ArmorListComponent } from './armor-list/armor-list.component';
import { ArmorComponent } from './armor.component';

@NgModule({
  imports:[
    NgbModule.forRoot(),
    SharedModule,
    ArmorRoutingModule
  ],

  declarations: [ ArmorListComponent, ArmorComponent]
})

export class ArmorModule {

}
