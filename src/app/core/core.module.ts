import { NgModule } from '@angular/core';
import { WeaponService } from './weapon.service';

//holds all singeton services
@NgModule({
  declarations: [],
  providers: [ WeaponService ],
  imports: [],
  exports: []
})

export class CoreModule {}
