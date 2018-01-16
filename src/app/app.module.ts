import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- need this for NgModel



import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //bootstrap module

//my modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ArmorModule } from './armor/armor.module';
import { MonstersModule } from './monsters/monsters.module';
import { MapsModule } from './maps/maps.module';
import { SkillsModule } from './skills/skills.module';
import { AppComponent } from './app.component';

//import angular modules here to use certain angular directives
import { WeaponsRoutingModule } from './weapons/weapons-routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ //modules needed for this module to function properly
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    FormsModule,
    HomeModule,
    WeaponsModule,
    ArmorModule,
    MonstersModule,
    MapsModule,
    SkillsModule,
    AppRoutingModule,

  ],
  declarations: [ //list components that belong to this module
    AppComponent,
  ],
  exports: [], //used to export componenets to other modules
  providers: [],//HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
