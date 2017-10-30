import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from './hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroServiceService } from 'app/hero/hero-service.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
   
hero: Hero;


  constructor(
  private heroService: HeroServiceService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {

this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);

  }




  goBack(): void{
  this.location.back();
  }

}
