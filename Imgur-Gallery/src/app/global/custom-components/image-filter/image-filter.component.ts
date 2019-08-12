import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImgurDataService} from "../../../../service/imgur-data.service";
import {cloneDeep, lowerCase} from 'lodash';
import {UtilityService} from "../../../../utils/utility-service";

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})
export class ImageFilterComponent implements OnInit {

  radioOptionsForViral: any[] = ['Viral', 'Not Viral'];
  radioOptionsForSection: any[] = ['Hot', 'Top', 'User'];
  dropDownOptionsForWindow: any[] = ['Day', 'Week', 'Month', 'Year', 'All'];
  dropDownOptionsForSort: any[] = ['Viral', 'Top', 'Time', 'Rising'];

  apiData;
  imagesData: any[];

  @Input()
  filterParamObject: any[];

  @Output()
  emitFilteredDataToGallery = new EventEmitter();

  constructor(private accountDataService: ImgurDataService, private utilityService: UtilityService) { }

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
    let newFilterParamObject = this.utilityService.convertToLowerCase(this.filterParamObject);

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
    const isViral = lowerCase(event);
    this.imagesData = this.apiData.data.filter(eachImage => (eachImage.in_most_viral === isViral));
  }
}
