import { Injectable } from '@angular/core';



@Injectable()
export class UtilityRoutingService {

  static checkUrlValid(url:string, compareToUrl):boolean {

    console.log("utiltity function invoking");

    url = url.replace(/\s/g, '').toLowerCase();
    let isUrlValid: boolean = false;
    let counter: number = 0;

    while( !isUrlValid && counter < compareToUrl.length){
      let currentUrlToCompare = compareToUrl[counter].name.replace(/\s/g, '');

      
      if(url == currentUrlToCompare)
        isUrlValid = true;

      counter++;
    }





    return isUrlValid;
  }

}
