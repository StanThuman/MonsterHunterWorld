import { NgModule } from '@angular/core';

import { MapsComponent } from './maps.component';
import { MapDetailsComponent } from './map-details/map-details.component';
import { SharedModule } from '../shared/shared.module';
import { MapsRoutingModule } from './maps-routing.module';


@NgModule({
  declarations: [ MapsComponent, MapDetailsComponent ],
  imports: [SharedModule, MapsRoutingModule ]
})


export class MapsModule {}
