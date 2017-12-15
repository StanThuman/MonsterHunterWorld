/*Used for img card component */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'card-thumbnail',
  templateUrl: './card-thumbnail.component.html',
  styles: [`
    .map-margins{
      margin-bottom:20px;
      max-width:210px;
      max-height 150px;

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
    span {
      display:block;
      text-align: center;
    }
    `]
})

export class CardThumbnailComponent {
  @Input() title: string;

  link: string;
  @Input() imgsrc: string;
  @Input() imgheight: number;
  @Input() imgwidth: number;
  constructor(private router: Router){



  }

  ngOnInit() :void {

    this.link = this.title.replace(/\s/g, '').toLowerCase();

    //this.title = "not defined";
  }
}
