import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from 'app/app-routing/app-routing.module';
import { HeroModule }   from './hero/hero.module';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
     
import { AppComponent }    from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSearchService } from './hero-search.service';
     
    @NgModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        HeroModule
      ],
      declarations: [
        AppComponent,
        DashbordComponent,
        HeroSearchComponent
      ],
      providers: [HeroSearchService],
      bootstrap: [ AppComponent ]
    })
    export class AppModule {
    }