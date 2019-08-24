import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  @Input()
  radioOptions: any[];

  @Input()
  isViral: boolean;

  @Input()
  parentName: string;

  @Output()
  optionChange = new EventEmitter();

  @Output()
  filterTypeChange = new EventEmitter();

  constructor() { }

  funcExcludeViral(viralBoolean) {
    const isViral = viralBoolean;
    this.optionChange.emit(isViral);
  }

  funcFilterImages(filterType) {
    const filterParam = filterType;
    this.filterTypeChange.emit(filterParam);
  }

}
