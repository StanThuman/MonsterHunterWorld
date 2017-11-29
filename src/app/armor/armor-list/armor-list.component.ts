import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Armor } from '../armor';


@Component({
  selector: 'armor-card',
  styles: [`
    hr {
      width: 85%;
    }
    [class*="col"]:hover {

    }
    .highlight:hover {
      box-shadow: 1px 1px 1px gray;
    }

    table {
      margin: 0 auto;
      align:center;
      width:100%;

    }

    table tr td {
      text-align: center;
      border: 1px solid black;

    }
    `],
    templateUrl: './armor-list.component.html'

})



export class ArmorListComponent {
  @Input() armorSet: Armor;

  ngOnInit(): void {
    console.log('armorlist');
    console.log(this)
  }
  //cardtitle1: string;
  onRankChanged(): void {
    console.log("child onRank");
  }

}
