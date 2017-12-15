import { NgModule } from '@angular/core';
import { WeaponService } from './weapon.service';
import { ArmorService } from './armor.service';
import { MapService } from './map.service';



//holds all singeton services
@NgModule({
  declarations: [],
  providers: [ WeaponService, ArmorService, MapService ],
  imports: [],
  exports: []
})

export class CoreModule {}
