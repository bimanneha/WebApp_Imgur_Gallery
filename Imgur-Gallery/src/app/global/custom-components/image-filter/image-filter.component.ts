import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountDataService} from "../../../../service/account-data.service";
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})
export class ImageFilterComponent implements OnInit {

  radioOptions: any[] = ['Hot', 'Top', 'User'];
  dropDownOptionsForWindow: any[] = ['Day', 'Week', 'Month', 'Year', 'All'];
  dropDownOptionsForSort: any[] = ['Viral', 'Top', 'Time', 'Rising'];

  apiData;
  imagesData: any[];

  sectionType = 'hot';
  sortType = 'viral';
  windowType = 'day';
  pageCount = 0;

  @Output()
  emitFilteredDataToGallery = new EventEmitter();

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
  }

  filterBasedOnSection(event) {
    console.log('event', event);
    this.sectionType = event;
  }

  filterBasedOnWindow(event) {
    console.log('event', event);
    this.windowType = event;
    this.accountDataService.getAllFilteredImages(this.sectionType, this.sortType, this.windowType, this.pageCount)
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];
        this.emitDataToGallery();
      });
  }

  filterBasedOnSort(event) {
    console.log('event', event);
    this.sortType = event;
    this.accountDataService.getAllFilteredImages(this.sectionType, this.sortType, this.windowType, this.pageCount)
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
