import { Component, OnInit, Input } from '@angular/core';
import {cloneDeep} from 'lodash';
import {ImgurDataService} from "../../service/imgur-data.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  apiData: any;
  imagesData: any[];

  @Input()
  filterParamObject: any;

  constructor(private accountDataService: ImgurDataService) { }

  ngOnInit() {
    this.accountDataService.apiGetAllImages()
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];
      });
  }

  refreshGalleryData(newData){
    this.imagesData = cloneDeep(newData);
  }

  backToTop() {

  }
}
