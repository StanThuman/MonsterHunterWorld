import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './navbar/navbar.component';
import { CardThumbnailComponent } from './card-thumbnail/card-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,

  ],
  declarations: [ NavbarComponent, CardThumbnailComponent ],
  exports: [ NavbarComponent, CardThumbnailComponent, BrowserModule]

})


export class SharedModule {


}
