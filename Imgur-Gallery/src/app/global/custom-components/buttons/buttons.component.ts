import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output()
  buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  backToTop() {
    this.buttonClicked.emit()
  }
}
