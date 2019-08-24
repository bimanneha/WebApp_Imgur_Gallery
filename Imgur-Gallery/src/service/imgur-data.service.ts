import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UtilityService} from "../utils/utility-service";

const apiPrefix = 'https://api.imgur.com/';
const galleryPath = '3/gallery/';

const getImages = apiPrefix + galleryPath;

@Injectable({
  providedIn: 'root'
})

export class ImgurDataService {

  constructor(private http: HttpClient) {
  }

  static setClientIdHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Client-ID ' + 'b2dd06590440a49');
  }

  apiGetAllImages(newFilterParamObject) {
    let headers = new HttpHeaders();
    headers = ImgurDataService.setClientIdHeader(headers);

    const filterString = UtilityService.concatURL(newFilterParamObject);

    return this.http.get(getImages + filterString, {headers});
  }

  getAllFilteredImages(newFilterParamObject) {
    let headers = new HttpHeaders();
    headers = ImgurDataService.setClientIdHeader(headers);

    const filterString = UtilityService.concatURL(newFilterParamObject);

    return this.http.get(getImages + filterString, {headers});
  }

  getImageDetails(imageId) {
    let headers = new HttpHeaders();
    headers = ImgurDataService.setClientIdHeader(headers);

    return this.http.get(getImages + imageId, {headers});
  }
}
