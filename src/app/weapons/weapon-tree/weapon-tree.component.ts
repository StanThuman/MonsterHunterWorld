import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeaponService } from '../../core/weapon.service';

@Component({
  templateUrl: './weapon-tree.component.html',
  styles: [`
    `]

})

export class WeaponTreeComponent {

  @Input() weapon: string;

  constructor(private weaponService: WeaponService, private route: ActivatedRoute){

    route.params.subscribe(route => {
      //console.log(route);

      this.weapon = this.weaponService.getWeapon();
        console.log(this.weapon);
      if(this.weapon === undefined )
        this.weapon = route.weapon;

    });
  }

  ngOnInit(): void {
    console.log(this.weaponService.getWeapon());
  }
}
