import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UtilityService} from "../utils/utility-service";

@Injectable({
  providedIn: 'root'
})

export class ImgurDataService {

  constructor(private http: HttpClient) {
  }

  apiGetAllImages(newFilterParamObject) {

    const filterString = UtilityService.concatURL(newFilterParamObject);

    return this.http.get('api/' + filterString);
  }

  getAllFilteredImages(newFilterParamObject) {

    const filterString = UtilityService.concatURL(newFilterParamObject);

    return this.http.get('api/' + filterString);
  }

  getImageDetails(imageId) {

    return this.http.get('api/' + imageId);
  }
}
