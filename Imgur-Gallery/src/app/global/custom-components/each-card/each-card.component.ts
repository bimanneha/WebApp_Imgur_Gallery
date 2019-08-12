import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-each-card',
  templateUrl: './each-card.component.html',
  styleUrls: ['./each-card.component.css']
})
export class EachCardComponent {

  @Input()
  eachImage: any;

  @Input()
  filterParamObject: any;

  isMute: boolean = true;

  constructor() { }
}
