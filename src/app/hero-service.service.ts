import { Injectable } from '@angular/core';

import { Hero } from './hero-detail/hero';
import { HEROES } from './hero-detail/mock-hero';

@Injectable()
export class HeroServiceService {

  constructor() { }

  getHeroes():  Promise<Hero[]> {

   return Promise.resolve(HEROES);

  }

}
