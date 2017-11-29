import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Armor } from './armor';
import { LowArmorList, HighArmorList, GArmorList } from './mock-armors';
import { Router } from '@angular/router';

@Component({
  templateUrl: './armor.component.html',
  styles: [`
    div:hover {
      cursor: pointer;
    }
    `]
})


export class ArmorComponent {

  @Output() onRankChanged = new EventEmitter<void>();

  armorList: Armor[][];
  currentArmorList: Armor[];
  rankTypes: boolean[] = [false, false, true];
  currentRank: number;

  constructor(private route: Router){
    this.armorList = [];
  }
  ngOnInit(): void {
    this.currentRank = 2;
    console.log("ngOnInit amor component");

    this.changeArmorList(this.currentRank);

  }
  //chages the data for the selected rank
  changeArmorList(newRank: number): void {
    switch(newRank){
      case 0:
        this.currentArmorList = LowArmorList
      break;

      case 1:
        this.currentArmorList = HighArmorList;
      break;

      case 2:
        this.currentArmorList = GArmorList;
      break;
    }
  }

  //changes the current Rank when selecting a different one
  changeRankView(newRank: number): void {

    if(this.currentRank != newRank){
      this.rankTypes[newRank] = true;
      this.rankTypes[this.currentRank] = false;
      this.currentRank = newRank;
    }
    //decide which data to load
    this.changeArmorList(newRank);
  }


} //end class
