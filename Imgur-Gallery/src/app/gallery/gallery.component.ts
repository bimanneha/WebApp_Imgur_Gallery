import { Component, OnInit } from '@angular/core';
import {cloneDeep} from 'lodash';
import {AccountDataService} from "../../service/account-data.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  apiData;
  imagesData: any[];

  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
    this.accountDataService.apiGetAllImages()
      .subscribe(imagesDataFromAPI => {
        this.apiData = cloneDeep(imagesDataFromAPI);
        this.imagesData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : [];

        console.log('imagesData ', this.imagesData);
      });
  }


}
