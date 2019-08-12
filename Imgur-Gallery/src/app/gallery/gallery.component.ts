import {Component, Input, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {ImgurDataService} from "../../service/imgur-data.service";
import {UtilityService} from "../../utils/utility-service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input()
  filterParamObject: any;

  apiData: any;
  imagesData: any[];

  constructor(private accountDataService: ImgurDataService) { }

  ngOnInit() {
    this.getAllImages();
  }

  refreshGalleryData(newData){
    this.imagesData = cloneDeep(newData);
  }

  backToTop() {
    window.scrollTo(0, 0);
  }

  loadMoreImages(event) {
    this.filterParamObject['pageCount'] = event;
    this.getAllImages();
  }

  getAllImages() {
    let newFilterParamObject = UtilityService.convertToLowerCase(this.filterParamObject);

    this.accountDataService.apiGetAllImages(newFilterParamObject)
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];
      });
  }
}
