import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const getUserImages = 'https://api.imgur.com/3/account/me/images';
const getAllImages = 'https://api.imgur.com/3/gallery/hot/viral/0';
const getAllWindowFilteredImages = 'https://api.imgur.com/3/gallery/';
const getAnImage = 'https://api.imgur.com/3/gallery/';

@Injectable({
  providedIn: 'root'
})

export class AccountDataService {

  constructor(private http: HttpClient) {
  }

  setBearerHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' + 'XXXXX');
  }

  setClientIdHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Client-ID ' + 'XXXXX');
  }

  apiGetUserImages() {
    let headers = new HttpHeaders();
    headers = this.setBearerHeader(headers);

    return this.http.get(getUserImages, {headers});
  }

  apiGetAllImages() {
    let headers = new HttpHeaders();
    headers = this.setClientIdHeader(headers);

    return this.http.get(getAllImages, {headers});
  }

  getAllFilteredImages(sectionType, sortType, windowType, pageCount) {
    let headers = new HttpHeaders();
    headers = this.setClientIdHeader(headers);
    const filterString = sectionType + '/' + sortType + '/' + windowType + '/' + pageCount;

    return this.http.get(getAllWindowFilteredImages + filterString, {headers});
  }

  getImageDetails(imageId) {
    let headers = new HttpHeaders();
    headers = this.setClientIdHeader(headers);

    return this.http.get(getAnImage + imageId, {headers});
  }
}
