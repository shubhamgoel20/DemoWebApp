import { Component,OnInit } from '@angular/core';
import { Hero } from './hero-detail/hero';
import { HeroServiceService } from './hero-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements  OnInit {
  title: string = 'DemoWebApp';
  heroes: Hero[];
  selectedHero : Hero;

constructor(public heroService: HeroServiceService, private router: Router){
}

ngOnInit(): void{
this.getHeroes();
}

getHeroes(): void {
this.heroService.getHeroes().then(heroarray => this.heroes = heroarray);
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

onSelect(hero: Hero): void{
this.selectedHero = hero;
 }
}
