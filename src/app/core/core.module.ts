import { NgModule } from '@angular/core';
import { WeaponService } from './weapon.service';
import { ArmorService } from './armor.service';
import { MapsService } from './maps.service';
import { UtilityRoutingService } from './utility-routing.service';



//holds all singeton services
@NgModule({
  declarations: [],
  providers: [ WeaponService, ArmorService, MapsService, UtilityRoutingService ],
  imports: [],
  exports: []
})

export class CoreModule {}
