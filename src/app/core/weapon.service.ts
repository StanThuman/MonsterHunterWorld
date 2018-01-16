import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { WEAPONTYPES } from './data/mock-weapons';

@Injectable()
export class WeaponService{

  //holds selected weapon for next page
  weapon: string;

  constructor(private router: Router, private route: ActivatedRoute,
  private http: HttpClient){//, private messageService: MessageService){

    route.params.subscribe(route => {
      console.log(this);
    })

  }

  getAllWeaponTypes(): object {

    return {
      blademaster: WEAPONTYPES.blademaster,
      gunner: WEAPONTYPES.gunner
    }
  }

  getWeaponType(weaponType: string): string[] {
      console.log("api call");
      this.testApiCall().subscribe( data => {
        console.log(data);
      });
    return WEAPONTYPES[weaponType];
      //gunner: GUNNERTYPES

  }

  testApiCall(): Observable<string[]> {
  let uri = "http://localhost:11111/api/values";

  return this.http.get<string[]>(uri);


}
  //
  // getGunnerWeaponTypes(): string[] {
  //   return GUNNERTYPES
  //
  // }

  getWeapon(): string {

      return this.weapon;
  }


  getWeaponTypeUrls(weaponType: string): string[] {

    let weaponLinks: string[] = WEAPONTYPES[weaponType];

    // //remove spaces
    weaponLinks = weaponLinks.map( x => x.replace(/\s/g, ''));

    //console.log(weaponLinks);

    return weaponLinks;
  }



  setWeapon(weaponType: string, index: number): void {

    this.weapon = WEAPONTYPES[weaponType][index];
    console.log(this.weapon = WEAPONTYPES[weaponType][index]);
  }


}
