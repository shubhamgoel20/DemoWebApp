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

add(name: string) :void {
 name = name.trim();
 if(! name)	{return;}
 this.heroService.create(name).then(hero => {this.heroes.push(hero); this.selectedHero = null;});

}

delete(hero: Hero): void{
	this.heroService.delete(hero.id).then(() => {
	       this.heroes =     this.heroes.filter(h => h !== hero);
            if(this.selectedHero === hero) {this.selectedHero = null;}

	});


}

}
