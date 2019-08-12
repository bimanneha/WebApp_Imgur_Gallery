import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountDataService} from "../../../../service/account-data.service";
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})
export class ImageFilterComponent implements OnInit {

  radioOptions: any[] = ['hot', 'top', 'user'];
  dropDownOptionsForWindow: any[] = ['day', 'week', 'month', 'year', 'all'];
  dropDownOptionsForSort: any[] = ['viral', 'top', 'time', 'rising'];

  apiData;
  imagesData: any[];

  @Input()
  filterParamObject: any[];

  @Output()
  emitFilteredDataToGallery = new EventEmitter();

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
  }

  filterBasedOnSection(event) {
    this.filterParamObject['sectionType'] = event;
    this.getImagesBasedOnFilterParams();
  }

  filterBasedOnWindow(event) {
    this.filterParamObject['windowType'] = event;
    this.getImagesBasedOnFilterParams();
  }

  filterBasedOnSort(event) {
    this.filterParamObject['sortType'] = event;
    this.getImagesBasedOnFilterParams();
  }

  getImagesBasedOnFilterParams() {
    this.accountDataService.getAllFilteredImages(this.filterParamObject['sectionType'], this.filterParamObject['sortType'], this.filterParamObject['windowType'], this.filterParamObject['pageCount'])
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];
        this.emitDataToGallery();
      });
  }

  emitDataToGallery() {
    this.emitFilteredDataToGallery.emit(this.imagesData);
  }
}
