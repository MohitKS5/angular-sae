import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SheetsService} from './sheets.service';

@Injectable()
export class ContentService {
  getCell(unique_identifier):Observable<any>{
    return this.sheets.getData(unique_identifier)
      .map(e => e.map(f=> f.gsx$b.$t));
  }
  constructor(public sheets: SheetsService) { }

}
