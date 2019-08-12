import {Injectable} from "@angular/core";
import {cloneDeep, lowerCase} from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  static convertToLowerCase(filterParamObject) {

    let newFilterParamObject = cloneDeep(filterParamObject);

    newFilterParamObject['sectionType'] = lowerCase(filterParamObject['sectionType']);
    newFilterParamObject['sortType'] = lowerCase(filterParamObject['sortType']);
    newFilterParamObject['windowType'] = lowerCase(filterParamObject['windowType']);
    newFilterParamObject['pageCount'] = lowerCase(filterParamObject['pageCount']);

    return newFilterParamObject;
  }

  static concatURL(filterParamObject) {

    let filterString;

    filterString = filterParamObject['sectionType'] + '/' + filterParamObject['sortType'] + '/' + filterParamObject['windowType'] + '/' + filterParamObject['pageCount'];

    return filterString;
  }
}
