import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeaponService } from '../core/weapon.service';

@Component({

  templateUrl: './weapons.component.html',
  styles: [`
    .my-margin-bottom {
      margin-bottom: 20px;
    }
    [class^="card"]{

    }
    // a, a:link, a:visited {
    //   text-decoration: none;
    //   color:black;
    // }
    `]


})


export class WeaponsComponent {


  weaponTypeTitle: string;
  currentWeaponType: string;
  @Input() currentWeaponTypeList: string[];

  constructor(private router: Router,
    private route: ActivatedRoute,
    private weaponService: WeaponService){

    console.log("inside weapon component");

    //changes data if on the same route
    //reloading the same component for same route wont reload
    //data unless you subscribe to the route params
    route.params.subscribe(route => {

      //TODO read this from service instead

      this.weaponTypeTitle = route.weaponType;
      console.log(this.weaponTypeTitle);
      this.currentWeaponType = route.weaponType;
      this.currentWeaponTypeList = weaponService.getWeaponType(this.weaponTypeTitle);


      //console.log(this.currentWeaponType);

    });
  }

  ngOnInit(): void {
    //console.log(this.route)
  }

  //changes weapon data loaded
  loadWeaponType(urlPath: string): void {



  }


}
