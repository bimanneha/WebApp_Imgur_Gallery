import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImgurDataService} from "../../../../service/imgur-data.service";
import {cloneDeep} from 'lodash';
import {UtilityService} from "../../../../utils/utility-service";

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})
export class ImageFilterComponent {

  radioOptionsForViral: any[] = ['Viral', 'Not Viral'];
  radioOptionsForSection: any[] = ['Hot', 'Top', 'User'];
  dropDownOptionsForWindow: any[] = ['Day', 'Week', 'Month', 'Year', 'All'];
  dropDownOptionsForSort: any[] = ['Viral', 'Top', 'Time', 'Rising'];

  @Input()
  apiData: any;

  @Input()
  filterParamObject: any[];

  @Output()
  emitFilteredDataToGallery = new EventEmitter();

  imagesData: any[];

  constructor(private accountDataService: ImgurDataService) { }

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
    let newFilterParamObject = UtilityService.convertToLowerCase(this.filterParamObject);

    this.accountDataService.getAllFilteredImages(newFilterParamObject)
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];
        this.emitDataToGallery();
      });
  }

  emitDataToGallery() {
    this.emitFilteredDataToGallery.emit(this.imagesData);
  }

  filterViral(event) {
    let isViral = event;
    let dataToFilter = cloneDeep(this.apiData.data);

    this.imagesData = dataToFilter.filter(eachImage => (eachImage.in_most_viral === isViral));

    this.emitDataToGallery();
  }
}
