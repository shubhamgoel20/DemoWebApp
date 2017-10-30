import { Component,OnInit } from '@angular/core';
import { Hero } from 'app/hero/hero-detail/hero';
import { HeroServiceService } from 'app/hero/hero-service.service';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

   heroes : Hero[];

constructor(public heroService: HeroServiceService) { }

ngOnInit(): void{
this.getHeroes();
}

getHeroes(): void {
this.heroService.getHeroes().then(heroarray => this.heroes =  heroarray.slice(1, 5));
}

}
