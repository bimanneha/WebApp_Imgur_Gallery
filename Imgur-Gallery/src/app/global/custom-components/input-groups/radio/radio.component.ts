import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  @Input()
  radioOptions: any[];

  @Input()
  parentName: string;

  @Output()
  optionChange = new EventEmitter();

  @Output()
  filterTypeChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  funcExcludeViral(viralBoolean) {
    const isViral = viralBoolean;
    this.optionChange.emit(isViral);
  }

  funcFilterImages(filterType) {
    const filterParam = filterType;
    this.filterTypeChange.emit(filterParam);
  }

}
