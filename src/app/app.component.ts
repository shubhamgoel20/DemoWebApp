import { Component,OnInit } from '@angular/core';
import { Hero } from './hero-detail/hero';
import { HeroServiceService } from './hero-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title: string = 'DemoWebApp';
  heroes: Hero[];
  selectedHero : Hero;

constructor(public heroService: HeroServiceService){
}

ngOnInit(): void{
this.getHeroes();
}

getHeroes(): void {
this.heroService.getHeroes().then(heroarray => this.heroes = heroarray);
}

selectHero(hero: Hero): void{
this.selectedHero = hero;
 }
}
