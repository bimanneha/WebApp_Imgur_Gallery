import {Injectable} from "@angular/core";
import {lowerCase, cloneDeep} from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  public convertToLowerCase(filterParamObject) {
    let newFilterParamObject = cloneDeep(filterParamObject);

    newFilterParamObject['sectionType'] = lowerCase(filterParamObject['sectionType']);
    newFilterParamObject['sortType'] = lowerCase(filterParamObject['sortType']);
    newFilterParamObject['windowType'] = lowerCase(filterParamObject['windowType']);
    newFilterParamObject['pageCount'] = lowerCase(filterParamObject['pageCount']);

    return newFilterParamObject;
  }
}
