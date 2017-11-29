import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['../../node_modules/bootstrap/dist/bootstrap.min.css']

})

export class AppComponent {
  title = 'Title Heroes app';

}
