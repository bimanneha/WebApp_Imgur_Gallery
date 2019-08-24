import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  @Input()
  filterParamObject: any;

  @Input()
  isMainPage: boolean;

  @Output()
  backToTopClicked = new EventEmitter();

  @Output()
  loadMoreClicked = new EventEmitter();

  constructor() { }

  backToTop() {
    this.backToTopClicked.emit();
  }

  loadMoreImages() {
    this.filterParamObject['pageCount'] += 1;
    this.loadMoreClicked.emit(this.filterParamObject['pageCount']);
  }
}
