import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//Decorator tells typescript to emit metadata about the service
//the metadata specifies that angular may need to inject dependencies into this service
//usually want to do this from the start
//sdlfkdlksjf
@Injectable()
export class HeroService {


  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(this.getHeroes()));
    // })
  } //stub
  getHero(id: number): Promise<Hero> {
    console.log('inside get hero');
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

}
