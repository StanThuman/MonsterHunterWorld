import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { CardThumbnailComponent } from './card-thumbnail/card-thumbnail.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,

  ],
  declarations: [ NavbarComponent, CardThumbnailComponent, PageNotFoundComponent ],
  exports: [ NavbarComponent, CardThumbnailComponent, BrowserModule]

})


export class SharedModule {


}
