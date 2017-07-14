import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SheetsService} from './sheets.service';
let str = '{';
@Injectable()
export class ContentService {
public string;
  getCellByTitle(unique_identifier): Observable<any> {

    return this.sheets.getData(unique_identifier)
      .map(e => e.map(f => {
        str = str.concat('"' + f.gsx$a.$t.toLowerCase() + '": "' + f.gsx$b.$t + '", ');
        return f;
      }))
      .map(this.makeobject);
  }

  private makeobject(): Observable<any> {
    let str2 = str + '"end":"end"}';
    return JSON.parse(str2) as Observable<any>;
  }
getCol(unique_identifier,colindex:string):Observable<any>{
    let i=colindex;
  return this.sheets.getData(unique_identifier)
    .map(e => e.map(f =>f['gsx$'+i].$t));
}
  constructor(public sheets: SheetsService) {
  }

}
