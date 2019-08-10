import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const getUserImages = 'https://api.imgur.com/3/account/me/images';
const getAllImages = 'https://api.imgur.com/3/gallery/hot/time/day/0?showViral=true&mature=true&album_previews=true';

@Injectable({
  providedIn: 'root'
})

export class AccountDataService {

  constructor(private http: HttpClient) { }

  setBearerHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Bearer ' + 'XXX');
  }

  setClientIdHeader(headers: HttpHeaders) {
    return headers.append('Authorization', 'Client-ID ' + 'XXX');
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
}
