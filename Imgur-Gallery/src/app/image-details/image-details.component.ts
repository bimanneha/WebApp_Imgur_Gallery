import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountDataService} from "../../service/account-data.service";
import {cloneDeep} from 'lodash';
import {ImageData} from "../../model/image-data";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  apiData: any;
  imageData: any;
  imageDetails: ImageData = new ImageData();
  isMute: boolean = true;

  constructor(private accountDataService: AccountDataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.accountDataService.getImageDetails(params.imageId)
        .subscribe(imageDataFromAPI => {
          this.apiData = cloneDeep(imageDataFromAPI);
          this.imageData = (this.apiData.hasOwnProperty('data')) ? cloneDeep(this.apiData.data) : new ImageData();

          this.imageDetails = this.createImageData(this.imageData);
        });
    });
  }

  createImageData(rawDataFromAPI) {
    const allImagesData = rawDataFromAPI.images;
    const firstImage = allImagesData[0];

    this.imageDetails = new ImageData();

    this.imageDetails.id = firstImage.id;
    this.imageDetails.imageType = firstImage.type;
    this.imageDetails.link = firstImage.link;

    this.imageDetails.title = rawDataFromAPI.title;
    this.imageDetails.description = rawDataFromAPI.description;
    this.imageDetails.cover_width = rawDataFromAPI.cover_width;
    this.imageDetails.cover_height = rawDataFromAPI.cover_height;
    this.imageDetails.ups = rawDataFromAPI.ups;
    this.imageDetails.downs = rawDataFromAPI.downs;
    this.imageDetails.score = rawDataFromAPI.score;

    return this.imageDetails;
  }

}
