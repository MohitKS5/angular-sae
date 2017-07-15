import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SheetsService} from './sheets.service';
import {unescapeIdentifier} from '@angular/compiler';
let str = new Object;
@Injectable()
export class ContentService {
  public string;

  getCellByTitle(unique_identifier): Observable<any> {
    return this.sheets.getJsonData(unique_identifier)
      .map(e => e.map(f => {
        str[f.gsx$heading.$t.toLowerCase()]= f.gsx$contents.$t.replace('</p>',"").split(`<p>`);
        return f;
      }))
      .map(ContentService.makeobject);
  }

  getPageCols(unique_identifier): Observable<any> {
    return this.sheets.getJsonData(unique_identifier)
      .map(e => e.map(f => {
        return {
          head: f.gsx$heading.$t,
          content: f.gsx$contents.$t.replace('</p>',"").split(`<p>`)
        };
      }))
  }

  private static makeobject(): Observable<any> {
    return str as Observable<any>;
  }

  getCol(unique_identifier, colindex: string): Observable<any> {
    let i = colindex;
    return this.sheets.getJsonData(unique_identifier)
      .map(e => e.map(f => f['gsx$' + i].$t));
  }

  constructor(public sheets: SheetsService) {
  }
  getPage(unique_identifier):Observable<any>{
    return this.sheets.getSheetData(unique_identifier);
  }
}
