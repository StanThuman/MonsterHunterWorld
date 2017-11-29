import { Component, OnInit } from '@angular/core';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { Hero } from '../heroes/hero';
// import { HeroService } from '../heroes/hero.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.html',
    styles:['']
})


export class NavbarComponent implements OnInit {

  links: string[] = [
    'weapons',
    'armor',
    'monsters',
    'maps',
    'skills',
    'items',
    'about'];

  //constructor(private heroService: HeroService){}

  ngOnInit(): void {

    // this.heroService.getHeroes()
    //   .then(heroes => {
    //     console.log(heroes);
    //     this.heroes = heroes.slice(1,5);
    //   });
  }

}
