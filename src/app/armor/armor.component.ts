import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { ArmorService } from '../core/armor.service';

import { Armor } from './armor';

@Component({
  templateUrl: './armor.component.html',
  styles: [`
    div:hover {
      cursor: pointer;
    }
    `]
})


export class ArmorComponent {



  armorList: Armor[];

  currentArmorRank: string;

  constructor(private route: Router, private router: ActivatedRoute,
    private armorService: ArmorService ){
      
    router.params.subscribe( x => {
      this.armorList = this.armorService.getArmor(x.armorRank);
      this.currentArmorRank = this.armorService.getCurrentArmorRank();
    });



  }

  ngOnInit(): void { }



} //end class
