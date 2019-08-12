import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const getAllImages = 'https://api.imgur.com/3/gallery/hot/viral/0';
const getAllWindowFilteredImages = 'https://api.imgur.com/3/gallery/';
const getAnImage = 'https://api.imgur.com/3/gallery/';

@Injectable({
  providedIn: 'root'
})

export class AccountDataService {

  constructor(private http: HttpClient) {
  }

  setClientIdHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Client-ID ' + 'b2dd06590440a49');
  }

  apiGetAllImages() {
    let headers = new HttpHeaders();
    headers = this.setClientIdHeader(headers);

    return this.http.get(getAllImages, {headers});
  }

  getAllFilteredImages(newfilterParamObject) {
    let headers = new HttpHeaders();
    headers = this.setClientIdHeader(headers);
    const filterString = newfilterParamObject['sectionType'] + '/' + newfilterParamObject['sortType'] + '/' + newfilterParamObject['windowType'] + '/' + newfilterParamObject['pageCount'];

    return this.http.get(getAllWindowFilteredImages + filterString, {headers});
  }

  getImageDetails(imageId) {
    let headers = new HttpHeaders();
    headers = this.setClientIdHeader(headers);

    return this.http.get(getAnImage + imageId, {headers});
  }
}
