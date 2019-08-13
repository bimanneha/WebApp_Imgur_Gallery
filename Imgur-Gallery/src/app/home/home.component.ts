import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterParamObject = {
    'sectionType': 'Hot',
    'sortType': 'Viral',
    'windowType': 'Day',
    'pageCount': 0
  };

  constructor() { }

  ngOnInit() {
  }

}
