import { Component, OnInit } from '@angular/core';



@Component({
  selector: '',
  templateUrl: './home.component.html',
  styles: [`
    [class*="card"]{
      box-shadow: 1px 1px  1px gray;

    }

    `]
    //styles: ['../../node_modules/bootstrap/dist/bootstrap.min.css']

})

export class HomeComponent {
  ngOnInit(): void {
    console.log("inside home");
  }

}
