import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent }  from 'app/dashbord/dashbord.component';
import { HeroComponent }      from 'app/hero/hero.component';
import { HeroDetailComponent } from 'app/hero/hero-detail/hero-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashbordComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
 
export class AppRoutingModule { }
