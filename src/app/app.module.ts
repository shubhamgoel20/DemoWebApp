import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HeroModule }   from './hero/hero.module';
     
import { AppComponent }        from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
     
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        HeroModule,
        RouterModule.forRoot([
        {
        path: 'hero',
        component: HeroComponent
        },
        {
 	    path: 'dashboard',
  	    component: DashbordComponent
		},
		{
  path: 'detail/:id',
  component: HeroDetailComponent
},
		{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'


},
		])

      ],
      declarations: [
        AppComponent,
        DashbordComponent
      ],
      providers: [
      ],
      bootstrap: [ AppComponent ]
    })
    export class AppModule {
    }