import { Component, OnInit } from '@angular/core';

import { WeaponService } from '../../core/weapon.service';

@Component({
  templateUrl: './weapon-tree.component.html',
  styles: [`
    `]

})

export class WeaponTreeComponent {

  constructor(private weaponService: WeaponService){}
  ngOnInit(): void {
    console.log(this.weaponService.getWeapon());
  }
}
