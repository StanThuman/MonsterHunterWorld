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
    // for(let x = 0; x < 15; x++){
    //   this.armorList.push("G rank Armor Name " + x);
    // }
  }
  ngOnInit(): void {
    this.currentRank = 2;
    console.log("router object");
    console.log(this.route);
    // console.log("oninit");
    //
    // let armorNameArray: string[] = ["low", "high", "G"];
    //
    // for(let i = 0; i < 3; i++){
    //   this.armorList[i] = [];
    //
    //
    //   for(let x = 0; x < 15; x++){
    //     this.armorList[i].push(
    //       {
    //         name: armorNameArray[i] + " Armor Name",
    //         rank: armorNameArray[i],
    //
    //
    //     });
    //   }
    this.changeArmorList(this.currentRank);
    // }
  }

  changeArmorList(newRank: number): void {
    //console.log(this);
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

  changeRankView(newRank: number): void {

    if(this.currentRank != newRank){
      this.rankTypes[newRank] = true;
      this.rankTypes[this.currentRank] = false;
      this.currentRank = newRank;
    }

    //decide which data to load
    this.changeArmorList(newRank);
  }


}
