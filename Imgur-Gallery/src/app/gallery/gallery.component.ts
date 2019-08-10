import { Component, OnInit } from '@angular/core';
import {cloneDeep} from 'lodash';
import {AccountDataService} from "../../service/account-data.service";
import {GalleryParameters, RADIO} from '../../enums/gallery-parameters';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  apiData;
  imagesData: any[];
  galleryParameters: GalleryParameters;
  radioOptions: any[] = ['Include Viral', 'Exclude Viral'];

  constructor(private accountDataService: AccountDataService) {
    this.galleryParameters = new GalleryParameters();

  }

  ngOnInit() {
    this.accountDataService.apiGetAllImages()
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];
      });
  }

  filterViral(event) {
    console.log('event', event);

    const isViral = event;

    this.imagesData = this.apiData.data.filter(eachImage => (eachImage.in_most_viral === isViral));
    console.log('this.imagesData', this.imagesData);
  }

  refreshGalleryData(newData){
    this.imagesData = cloneDeep(newData);
    console.log('this.imagesData', this.imagesData);
  }
}
