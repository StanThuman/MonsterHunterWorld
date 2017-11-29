import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; //bootstrap module
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [ //list components that belong to this module
    HomeComponent
  ],
  imports: [ //modules needed for this module to function properly
    // BrowserModule,
  //  HomeRoutingModule
    NgbModule,
    // FormsModule,
    // AppRoutingModule
  ],
  exports : [],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
