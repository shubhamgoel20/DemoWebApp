import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from 'app/app-routing/app-routing.module';
import { HeroModule }   from './hero/hero.module';
     
import { AppComponent }        from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
     
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HeroModule
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