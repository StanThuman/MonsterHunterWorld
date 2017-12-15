import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ArmorComponent } from './armor/armor.component';
import { MonstersComponent } from './monsters/monsters.component';
import { MapsComponent } from './maps/maps.component';
import { SkillsComponent } from './skills/skills.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent },

  //{ path: 'armor', component: ArmorComponent },
  { path: 'monsters', component: MonstersComponent },
  //{ path: 'maps', component: MapsComponent },

  { path: 'skills', component: SkillsComponent },

  //{ path: '', component: WeaponsComponent, outlet: 'weapontype' }
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
  { path: 'error', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
];
// { enableTracing: true}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
