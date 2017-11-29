/*Used for img card component */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'card-thumbnail',
  templateUrl: './card-thumbnail.component.html',
  styles: [`
    .map-margins{
      margin-bottom:20px;
    }
    .text-padding{
      padding: 0.75em;
    }
    [class*="col"]:hover {

    }
    .highlight:hover {
      box-shadow: 1px 1px 1px gray;
    }
    a, a:link {
      text-decoration: none;
      color: black;

    }
    `]
})

export class CardThumbnailComponent {
  @Input() title: string;


  constructor(private router: Router){}

  ngOnInit() :void {

    // this.link = this.link.replace(/\s/g, '');

    //this.title = "not defined";
  }
}
