import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent {

  @Input()
  filterParameter: string;

  @Input()
  dropDownOptions: any[];

  @Input()
  parentName: string;

  @Output()
  optionChange = new EventEmitter();

  @Output()
  windowTypeChange = new EventEmitter();

  @Output()
  sortTypeChange = new EventEmitter();

  constructor() { }

  getFilteredImages() {
    (this.parentName === 'Window') ? this.windowTypeChange.emit(this.filterParameter)
                                   : this.sortTypeChange.emit(this.filterParameter);
  }

}
